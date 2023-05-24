import express from 'express';
import dotenv from 'dotenv';
import loginRoute from './user/routes/loginRoute.js';
import logoutRoute from "./user/routes/logoutRoute.js";
import profileRoute from './user/routes/profileRoute.js';
import registerRoute from "./user/routes/registerRoute.js";
import { errorHandler, notFound } from './middlewares/errorMiddleware/errorMiddleware.js';
import connectDB from './server.js';
import cookieParser from 'cookie-parser';
import corsMiddleware from './middlewares/corsMiddleware/corsMiddleware.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;


// app.use(bodyParser.json());

app.use("/api/user", registerRoute);
app.use("/api/user", loginRoute);
app.use("/api/user", logoutRoute);
app.use("/api/user", profileRoute);

app.use(corsMiddleware);

app.use(notFound);
app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`server running on port: http://localhost:${PORT}`);
})
