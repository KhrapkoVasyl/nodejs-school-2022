import { IMainParams, AbstractEmailTemplate } from './abstractEmailTemplate';

export interface HtmlEmailTemplatePayload {
  text?: string;
  html: string;
}

export class HtmlEmailTemplate extends AbstractEmailTemplate<HtmlEmailTemplatePayload> {
  constructor(mainParams: IMainParams, bodyParams: HtmlEmailTemplatePayload) {
    super(mainParams, bodyParams);
  }
}
