import { AbstractEmailTemplate } from '../templates/abstractEmailTemplate';

export interface ISender {
  sendEmail<TPayload>(
    emailTemplate: AbstractEmailTemplate<TPayload>
  ): Promise<void>;
}
