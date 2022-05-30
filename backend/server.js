import path from 'path';

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import morgan from 'morgan'
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import gradeRoutes from './routes/gradeRoutes.js'
import anoRoutes from './routes/anoRoutes.js'
import cursoRoutes from './routes/cursoRoutes.js'
import uploadsRoutes from './routes/uploadsRoutes.js'
import eventoRoutes from './routes/eventoRoutes.js'
import blocoRoutes from './routes/blocoRoutes.js'

const app = express();

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

dotenv.config();

connectDB();

app.use(express.json());



app.use("/api/grades", gradeRoutes);
app.use("/api/cursos",cursoRoutes);
app.use('/api/anos',anoRoutes);
app.use("/api/docentes", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadsRoutes);
app.use("/api/eventos", eventoRoutes);
app.use("/api/blocos", blocoRoutes);

const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,"/frontend/build")))

  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname, 'frontend','build','index.html')))
}else{
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
