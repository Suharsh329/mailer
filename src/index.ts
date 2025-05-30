import express from 'express';
import routes from './routes';
import limiter from './middleware/rate-limiter';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use(limiter);

export default app;
