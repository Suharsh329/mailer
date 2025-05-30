export interface MailBody {
  game?: string;
  from?: string;
  to: string;
  subject?: string;
  text?: string;
  html?: string;
  cc?: string;
  bcc?: string;
  attachments?: Array<{
    filename: string;
    content: string | Buffer;
    contentType?: string;
  }>;
  headers?: Record<string, string>;
  priority?: 'high' | 'normal' | 'low';
  tags?: string[];
  tracking?: boolean;
  trackingClicks?: 'yes' | 'no';
  trackingOpens?: 'yes' | 'no';
  recipientVariables?: Record<string, any>;
  template?: string;
  variables?: Record<string, any>;
  isTest?: boolean;
};