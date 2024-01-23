import express from 'express';
import userRouter from './routes/user.route.js';
import { config } from 'dotenv'
import cookieParser from 'cookie-parser';

const app = express();

config({
    path: './data/config.env'
});

// using middleware
app.use(express.json());
app.use(cookieParser());

// using routes...
app.use("/api/v1/users", userRouter);

export default app;


