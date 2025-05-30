import { CoreObjectNameSingular } from '@/object-metadata/types/CoreObjectNameSingular';
import { FieldContext } from '@/object-record/record-field/contexts/FieldContext';
import { orderWorkflowRunOutput } from '@/object-record/record-field/meta-types/utils/orderWorkflowRunOutput';
import { useContext } from 'react';
import { isDefined, parseJson } from 'twenty-shared/utils';
import { JsonObject, JsonValue } from 'type-fest';

export const usePrecomputedJsonDraftValue = ({
  draftValue,
}: {
  draftValue: string | undefined;
}): JsonValue => {
  const { fieldDefinition } = useContext(FieldContext);

  const parsedJsonValue = isDefined(draftValue)
    ? parseJson<JsonValue>(draftValue)
    : null;

  if (
    fieldDefinition.metadata.objectMetadataNameSingular ===
      CoreObjectNameSingular.WorkflowRun &&
    fieldDefinition.metadata.fieldName === 'output' &&
    isDefined(draftValue)
  ) {
    return orderWorkflowRunOutput(parsedJsonValue) as JsonObject;
  }

  return parsedJsonValue;
};
