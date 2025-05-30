import { Request, Response } from 'express';
import { sendMail } from '../services/mail.service';

export const postMail = async (req: Request, res: Response): Promise<any> => {
  if (!req.body || !req.body.to) {
    return res.status(400).json({ error: 'Recipient email address is required.' });
  }

  try {
    await sendMail(req.body, req.body.isTest ?? false);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
