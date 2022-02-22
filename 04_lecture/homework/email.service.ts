import { ISender } from './senders/iSender';
import { IMainParams } from './templates/abstractEmailTemplate';

import {
  HtmlEmailTemplate,
  HtmlEmailTemplatePayload,
} from './templates/htmlEmailTemplate';

import {
  TextOnlyEmailTemplate,
  TextOnlyEmailTemplatePayload,
} from './templates/textOnlyEmailTemplate';

import {
  WithAttachmentsEmailTemplate,
  WithAttachmentsEmailTemplatePayload,
} from './templates/withAttachmentsEmailTemplate';

export class EmailService {
  constructor(private sender: ISender) {}

  public async sendTextOnlyEmail(
    mainParams: IMainParams,
    bodyParams: TextOnlyEmailTemplatePayload
  ): Promise<void> {
    const template = new TextOnlyEmailTemplate(mainParams, bodyParams);

    await this.sender.sendEmail<TextOnlyEmailTemplatePayload>(template);
  }

  public async sendHtmlEmail(
    mainParams: IMainParams,
    bodyParams: HtmlEmailTemplatePayload
  ): Promise<void> {
    const template = new HtmlEmailTemplate(mainParams, bodyParams);

    await this.sender.sendEmail<HtmlEmailTemplatePayload>(template);
  }

  public async sendWithAttachmentsEmail(
    mainParams: IMainParams,
    bodyParams: WithAttachmentsEmailTemplatePayload
  ): Promise<void> {
    const template = new WithAttachmentsEmailTemplate(mainParams, bodyParams);

    await this.sender.sendEmail<WithAttachmentsEmailTemplatePayload>(template);
  }
}
