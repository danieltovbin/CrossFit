import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import corsOptions from './config/corsOptions';
import cookieParser from 'cookie-parser';
import connectDB from "./config/dbConn";
import credentials from "./middleware/credentials";
import pageNotFound from "./middleware/pageNotFound";
import errorHandler from "./middleware/errorHandler";
import { configureCloudinary } from "./config/configCloudinary";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB()

app.use(credentials)

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
configureCloudinary();

import authRouter from './api/auth/authRouter'
app.use("/api/auth", authRouter)

import equipmentRouter from './api/equipments/equipmentsRouter'
app.use("/api/equipments", equipmentRouter);

app.use(pageNotFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

