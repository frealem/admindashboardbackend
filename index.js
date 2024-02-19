import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import clientRoutes from './Routes/clientRoutes.js';
import generalRoutes from './Routes/generalRoutes.js';
import managementRoutes from './Routes/managementRoutes.js';
import salesRoutes from './Routes/salesRoutes.js';
import {dataUser} from './Data/index.js'
import User from './Models/user.js';

dotenv.config();
const app=express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());

//routes

app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);

//mongoose connection

const PORT=process.env.PORT||8000;
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>{console.log(`server running on Port : ${PORT}`)})
User.insertMany(dataUser);
}).catch((error)=>console.log(`${error} did not connect`));