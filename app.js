import express from 'express';
import userRouter from './routes/user.route.js';
import taskRouter from './routes/task.route.js';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';

const app = express();

config({
    path: './data/config.env'
});

// using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// using routes...
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
    res.send("Nice Working");
});

app.use(errorMiddleware);

export default app;


