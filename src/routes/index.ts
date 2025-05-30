import { postMail } from '../controllers/mail.controller';
import { Request, Response, Router } from 'express';

const router = Router();

router.post('/mail/games', postMail);

router.get('/health', async (req: Request, res: Response): Promise<any> => {
  return res.status(200).json({message: "ok"});
})

export default router;
