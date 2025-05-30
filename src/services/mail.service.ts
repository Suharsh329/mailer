import config from '../config';
import axios from 'axios';
import { MailBody } from '@/models/mail.model';

interface MailParams {
  from: string;
  to: string;
  subject: string;
  text: string;
  template?: string;
  'recipient-variables'?: any;
  't:variables'?: any;
  'o:testmode'?: string;
}

export const sendMail = async (mailBody: MailBody, isTest: boolean) => {
  if (!config.mailgunAPIKey || !config.mailgunDomainName || !config.domainName || !config.maigunRoute) {
    throw new Error('Mailgun domain name is not configured.');
  }
  let from = `${config.domainName} <postmaster@${config.mailgunDomainName}>`;

  if (mailBody.game) {
    from = mailBody.game + ' - ' + from;
  }

  const to = mailBody.to;

  if (!to) {
    throw new Error('Recipient email address is required.');
  }

  const subject = mailBody.subject || '';
  const text = mailBody.text || '';

  const params: MailParams = {
    from: from,
    to: to,
    subject: subject,
    text: text,
  };

  switch (mailBody.game) {
    case 'Mafia':
      params.template = 'mafia-game';
      break;
    case 'Impostor':
      params.template = 'impostor-game';
      break;
    default:
      params.template = 'mafia-game';
  }

  if (mailBody.recipientVariables) {
    params['recipient-variables'] = JSON.stringify(mailBody.recipientVariables);
  }

  if (mailBody.variables) {
    params['t:variables'] = JSON.stringify(mailBody.variables);
  }

  if (isTest) {
    params['o:testmode'] = 'yes';
  }

  const response = await axios.post(
    `${config.maigunRoute}`,
    {},
    {
      auth: {
        username: 'api',
        password: config.mailgunAPIKey,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      params: params,
    }
  );

  if (response.status !== 200) {
    console.error('Mailgun response error:', response.data);
    throw new Error(`Failed to send email: ${response.statusText}`);
  }

  return response.data;
};
