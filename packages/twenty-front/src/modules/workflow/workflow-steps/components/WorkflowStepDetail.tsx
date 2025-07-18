import { WorkflowAction, WorkflowTrigger } from '@/workflow/types/Workflow';
import { assertUnreachable } from '@/workflow/utils/assertUnreachable';
import { getStepDefinitionOrThrow } from '@/workflow/utils/getStepDefinitionOrThrow';
import { WorkflowEditActionAiAgent } from '@/workflow/workflow-steps/workflow-actions/ai-agent-action/components/WorkflowEditActionAiAgent';
import { WorkflowActionServerlessFunction } from '@/workflow/workflow-steps/workflow-actions/code-action/components/WorkflowActionServerlessFunction';
import { WorkflowEditActionCreateRecord } from '@/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionCreateRecord';
import { WorkflowEditActionDeleteRecord } from '@/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionDeleteRecord';
import { WorkflowEditActionSendEmail } from '@/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionSendEmail';
import { WorkflowEditActionUpdateRecord } from '@/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionUpdateRecord';
import { WorkflowEditActionFilter } from '@/workflow/workflow-steps/workflow-actions/filter-action/components/WorkflowEditActionFilter';
import { WorkflowEditActionFindRecords } from '@/workflow/workflow-steps/workflow-actions/find-records-action/components/WorkflowEditActionFindRecords';
import { WorkflowEditActionFormBuilder } from '@/workflow/workflow-steps/workflow-actions/form-action/components/WorkflowEditActionFormBuilder';
import { WorkflowEditActionHttpRequest } from '@/workflow/workflow-steps/workflow-actions/http-request-action/components/WorkflowEditActionHttpRequest';
import { WorkflowEditTriggerCronForm } from '@/workflow/workflow-trigger/components/WorkflowEditTriggerCronForm';
import { WorkflowEditTriggerDatabaseEventForm } from '@/workflow/workflow-trigger/components/WorkflowEditTriggerDatabaseEventForm';
import { WorkflowEditTriggerManualForm } from '@/workflow/workflow-trigger/components/WorkflowEditTriggerManualForm';
import { WorkflowEditTriggerWebhookForm } from '@/workflow/workflow-trigger/components/WorkflowEditTriggerWebhookForm';
import { isDefined } from 'twenty-shared/utils';

type WorkflowStepDetailProps = {
  stepId: string;
  trigger: WorkflowTrigger | null;
  steps: Array<WorkflowAction> | null;
} & (
  | {
      readonly: true;
      onTriggerUpdate?: undefined;
      onActionUpdate?: undefined;
    }
  | {
      stepId: string;
      readonly?: false;
      onTriggerUpdate: (trigger: WorkflowTrigger) => void;
      onActionUpdate: (action: WorkflowAction) => void;
    }
);

export const WorkflowStepDetail = ({
  stepId,
  trigger,
  steps,
  ...props
}: WorkflowStepDetailProps) => {
  const stepDefinition = getStepDefinitionOrThrow({
    stepId,
    trigger,
    steps,
  });

  if (!isDefined(stepDefinition) || !isDefined(stepDefinition.definition)) {
    return null;
  }

  switch (stepDefinition.type) {
    case 'trigger': {
      switch (stepDefinition.definition.type) {
        case 'DATABASE_EVENT': {
          return (
            <WorkflowEditTriggerDatabaseEventForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={props}
            />
          );
        }
        case 'MANUAL': {
          return (
            <WorkflowEditTriggerManualForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={props}
            />
          );
        }
        case 'WEBHOOK': {
          return (
            <WorkflowEditTriggerWebhookForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={props}
            />
          );
        }
        case 'CRON': {
          return (
            <WorkflowEditTriggerCronForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={props}
            />
          );
        }
        default:
          return assertUnreachable(
            stepDefinition.definition,
            `Expected the step to have an handler; ${JSON.stringify(stepDefinition)}`,
          );
      }
    }
    case 'action': {
      switch (stepDefinition.definition.type) {
        case 'CODE': {
          return (
            <WorkflowActionServerlessFunction
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }
        case 'SEND_EMAIL': {
          return (
            <WorkflowEditActionSendEmail
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }
        case 'CREATE_RECORD': {
          return (
            <WorkflowEditActionCreateRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'UPDATE_RECORD': {
          return (
            <WorkflowEditActionUpdateRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'DELETE_RECORD': {
          return (
            <WorkflowEditActionDeleteRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'FIND_RECORDS': {
          return (
            <WorkflowEditActionFindRecords
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'FORM': {
          return (
            <WorkflowEditActionFormBuilder
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'HTTP_REQUEST': {
          return (
            <WorkflowEditActionHttpRequest
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }
        case 'AI_AGENT': {
          return (
            <WorkflowEditActionAiAgent
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }
        case 'FILTER': {
          return (
            <WorkflowEditActionFilter
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        default:
          return assertUnreachable(
            stepDefinition.definition,
            `Expected the step to have an handler; ${JSON.stringify(stepDefinition)}`,
          );
      }
    }
  }
};
