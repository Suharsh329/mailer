import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 1000,
	limit: 1,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
});

export default limiter