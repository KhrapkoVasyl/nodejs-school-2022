import { ISender } from './iSender';
import * as nodemailer from 'nodemailer';
import { AbstractEmailTemplate } from '../templates/abstractEmailTemplate';

export class SmtpSender implements ISender {
  public async sendEmail<TPayload>(
    emailTemplate: AbstractEmailTemplate<TPayload>
  ): Promise<void> {
    try {
      const testAccount = await nodemailer.createTestAccount();

      let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user, // generated test user
          pass: testAccount.pass, // generated test password
        },
      });

      const mainParams = emailTemplate.getMainParams();
      const bodyParams = emailTemplate.getBodyParams();

      let info = await transporter.sendMail({
        ...mainParams,
        ...bodyParams,
      });

      console.log('Message sent: ' + info.messageId);
      console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
    } catch (e) {
      console.log('Email was not sent');
    }
  }
}
