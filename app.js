import express from 'express';
import userRouter from './routes/user.route.js';
import { config } from 'dotenv'

const app = express();

config({
    path: './data/config.env'
});






// using middleware
app.use(express.json());

app.use(userRouter);

export default app;


