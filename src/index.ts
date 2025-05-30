import express from 'express';
import routes from './routes';
import limiter from './middleware/rate-limiter';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', routes);

app.use(limiter);

export default app;
