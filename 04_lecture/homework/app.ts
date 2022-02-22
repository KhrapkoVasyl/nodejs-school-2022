import { EmailService } from './email.service';
import { SmtpSender } from './senders/smtp.sender';

async function main() {
  const smtpSender = new SmtpSender();
  const service = new EmailService(smtpSender);

  await service.sendTextOnlyEmail(
    {
      from: 'ex1@gmail.com',
      to: 'ex2@ukr.net',
      subject: 'test text only email',
    },
    {
      text: 'Hello world!',
    }
  );

  await service.sendHtmlEmail(
    {
      from: 'ex1@gmail.com',
      to: 'ex2@ukr.net',
      subject: 'test html email',
    },
    {
      html: '<h1>hello world!</h1>',
    }
  );

  await service.sendWithAttachmentsEmail(
    {
      from: 'ex1@gmail.com',
      to: 'ex2@ukr.net',
      subject: 'test mail with attachments',
    },
    {
      text: 'Some text',
      attachments: [
        {
          filename: 'pic.jpg',
          path: './pic.jpg',
        },
        {
          filename: 'textFile.txt',
          content: 'Hello from attached file',
        },
      ],
    }
  );
}

main()
  .then(() => process.exit(0))
  .catch(console.log);
