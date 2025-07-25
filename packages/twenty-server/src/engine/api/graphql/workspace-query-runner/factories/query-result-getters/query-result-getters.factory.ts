import { Injectable, Logger } from '@nestjs/common';

import { FieldMetadataType } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';

import { ObjectRecord } from 'src/engine/api/graphql/workspace-query-builder/interfaces/object-record.interface';
import { QueryResultFieldValue } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/interfaces/query-result-field-value';
import { QueryResultGetterHandlerInterface } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/interfaces/query-result-getter-handler.interface';
import { IConnection } from 'src/engine/api/graphql/workspace-query-runner/interfaces/connection.interface';
import { IEdge } from 'src/engine/api/graphql/workspace-query-runner/interfaces/edge.interface';

import { isQueryResultFieldValueAConnection } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/guards/is-query-result-field-value-a-connection.guard';
import { isQueryResultFieldValueANestedRecordArray } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/guards/is-query-result-field-value-a-nested-record-array.guard';
import { isQueryResultFieldValueARecordArray } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/guards/is-query-result-field-value-a-record-array.guard';
import { isQueryResultFieldValueARecord } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/guards/is-query-result-field-value-a-record.guard';
import { ActivityQueryResultGetterHandler } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/handlers/activity-query-result-getter.handler';
import { AttachmentQueryResultGetterHandler } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/handlers/attachment-query-result-getter.handler';
import { PersonQueryResultGetterHandler } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/handlers/person-query-result-getter.handler';
import { WorkspaceMemberQueryResultGetterHandler } from 'src/engine/api/graphql/workspace-query-runner/factories/query-result-getters/handlers/workspace-member-query-result-getter.handler';
import { CompositeInputTypeDefinitionFactory } from 'src/engine/api/graphql/workspace-schema-builder/factories/composite-input-type-definition.factory';
import { FileService } from 'src/engine/core-modules/file/services/file.service';
import { ObjectMetadataItemWithFieldMaps } from 'src/engine/metadata-modules/types/object-metadata-item-with-field-maps';
import { ObjectMetadataMaps } from 'src/engine/metadata-modules/types/object-metadata-maps';
import { isFieldMetadataEntityOfType } from 'src/engine/utils/is-field-metadata-of-type.util';

// TODO: find a way to prevent conflict between handlers executing logic on object relations
// And this factory that is also executing logic on object relations
// Right now the factory will override any change made on relations by the handlers
@Injectable()
export class QueryResultGettersFactory {
  private readonly logger = new Logger(
    CompositeInputTypeDefinitionFactory.name,
  );
  private handlers: Map<string, QueryResultGetterHandlerInterface>;

  constructor(private readonly fileService: FileService) {
    this.initializeHandlers();
  }

  private initializeHandlers() {
    this.handlers = new Map<string, QueryResultGetterHandlerInterface>([
      ['attachment', new AttachmentQueryResultGetterHandler(this.fileService)],
      ['person', new PersonQueryResultGetterHandler(this.fileService)],
      [
        'workspaceMember',
        new WorkspaceMemberQueryResultGetterHandler(this.fileService),
      ],
      ['note', new ActivityQueryResultGetterHandler(this.fileService)],
      ['task', new ActivityQueryResultGetterHandler(this.fileService)],
    ]);
  }

  private async processConnection(
    connection: IConnection<ObjectRecord>,
    objectMetadataItemId: string,
    objectMetadataMaps: ObjectMetadataMaps,
    workspaceId: string,
  ): Promise<IConnection<ObjectRecord>> {
    return {
      ...connection,
      edges: await Promise.all(
        connection.edges.map(async (edge: IEdge<ObjectRecord>) => ({
          ...edge,
          node: await this.processRecord(
            edge.node,
            objectMetadataItemId,
            objectMetadataMaps,
            workspaceId,
          ),
        })),
      ),
    };
  }

  private async processNestedRecordArray(
    result: { records: ObjectRecord[] },
    objectMetadataItemId: string,
    objectMetadataMaps: ObjectMetadataMaps,
    workspaceId: string,
  ) {
    return {
      ...result,
      records: await Promise.all(
        result.records.map(
          async (record: ObjectRecord) =>
            await this.processRecord(
              record,
              objectMetadataItemId,
              objectMetadataMaps,
              workspaceId,
            ),
        ),
      ),
    };
  }

  private async processRecordArray(
    recordArray: ObjectRecord[],
    objectMetadataItemId: string,
    objectMetadataMaps: ObjectMetadataMaps,
    workspaceId: string,
  ) {
    return await Promise.all(
      recordArray.map(
        async (record: ObjectRecord) =>
          await this.processRecord(
            record,
            objectMetadataItemId,
            objectMetadataMaps,
            workspaceId,
          ),
      ),
    );
  }

  private async processRecord(
    record: ObjectRecord,
    objectMetadataItemId: string,
    objectMetadataMaps: ObjectMetadataMaps,
    workspaceId: string,
  ): Promise<ObjectRecord> {
    const objectMetadataMapItem = objectMetadataMaps.byId[objectMetadataItemId];

    if (!isDefined(objectMetadataMapItem)) {
      throw new Error('Object metadata map item is not defined');
    }

    const handler = this.getHandler(objectMetadataMapItem.nameSingular);

    const relationFields = Object.keys(record)
      .map(
        (recordFieldName) =>
          objectMetadataMapItem.fieldsById[
            objectMetadataMapItem.fieldIdByName[recordFieldName]
          ],
      )
      .filter(isDefined)
      .filter((fieldMetadata) =>
        isFieldMetadataEntityOfType(fieldMetadata, FieldMetadataType.RELATION),
      );

    const relationFieldsProcessedMap = {} as Record<
      string,
      QueryResultFieldValue
    >;

    for (const relationField of relationFields) {
      if (!isDefined(relationField.relationTargetObjectMetadataId)) {
        throw new Error('Relation target object metadata id is not defined');
      }

      relationFieldsProcessedMap[relationField.name] =
        await this.processQueryResultField(
          record[relationField.name],
          relationField.relationTargetObjectMetadataId,
          objectMetadataMaps,
          workspaceId,
        );
    }

    const objectRecordProcessedWithoutRelationFields = await handler.handle(
      record,
      workspaceId,
    );

    const processedRecord = {
      ...objectRecordProcessedWithoutRelationFields,
      ...relationFieldsProcessedMap,
    };

    return processedRecord;
  }

  private async processQueryResultField(
    queryResultField: QueryResultFieldValue,
    objectMetadataItemId: string,
    objectMetadataMaps: ObjectMetadataMaps,
    workspaceId: string,
  ) {
    if (isQueryResultFieldValueAConnection(queryResultField)) {
      return await this.processConnection(
        queryResultField,
        objectMetadataItemId,
        objectMetadataMaps,
        workspaceId,
      );
    } else if (isQueryResultFieldValueANestedRecordArray(queryResultField)) {
      return await this.processNestedRecordArray(
        queryResultField,
        objectMetadataItemId,
        objectMetadataMaps,
        workspaceId,
      );
    } else if (isQueryResultFieldValueARecordArray(queryResultField)) {
      return await this.processRecordArray(
        queryResultField,
        objectMetadataItemId,
        objectMetadataMaps,
        workspaceId,
      );
    } else if (isQueryResultFieldValueARecord(queryResultField)) {
      return await this.processRecord(
        queryResultField,
        objectMetadataItemId,
        objectMetadataMaps,
        workspaceId,
      );
    } else {
      this.logger.warn(
        `Query result field is not a record, connection, nested record array or record array. 
        This is an undetected case in query result getter that should be implemented !!`,
      );

      return queryResultField;
    }
  }

  async create(
    result: QueryResultFieldValue,
    objectMetadataItem: ObjectMetadataItemWithFieldMaps,
    workspaceId: string,
    objectMetadataMaps: ObjectMetadataMaps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    return await this.processQueryResultField(
      result,
      objectMetadataItem.id,
      objectMetadataMaps,
      workspaceId,
    );
  }

  private getHandler(objectType: string): QueryResultGetterHandlerInterface {
    return (
      this.handlers.get(objectType) || {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handle: (result: any) => result,
      }
    );
  }
}
