import { IMainParams, AbstractEmailTemplate } from './abstractEmailTemplate';

export interface WithAttachmentsEmailTemplatePayload {
  text?: string;
  html?: string;
  attachments: Array<{ filename?: string; path?: string; content?: string }>;
}

export class WithAttachmentsEmailTemplate extends AbstractEmailTemplate<WithAttachmentsEmailTemplatePayload> {
  constructor(
    mainParams: IMainParams,
    bodyParams: WithAttachmentsEmailTemplatePayload
  ) {
    super(mainParams, bodyParams);
  }
}
