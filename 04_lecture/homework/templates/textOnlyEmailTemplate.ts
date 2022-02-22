import { IMainParams, AbstractEmailTemplate } from './abstractEmailTemplate';

export interface TextOnlyEmailTemplatePayload {
  text: string;
}

export class TextOnlyEmailTemplate extends AbstractEmailTemplate<TextOnlyEmailTemplatePayload> {
  constructor(
    mainParams: IMainParams,
    bodyParams: TextOnlyEmailTemplatePayload
  ) {
    super(mainParams, bodyParams);
  }
}
