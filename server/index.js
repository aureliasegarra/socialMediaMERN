import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './routes/posts.js';

const app = express();


//-----------------------------
//------ MIDDLEWARES ----------
//-----------------------------
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/posts', postRouter);

const CONNECTION = process.env.CONNECTION_URL; 
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

