import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://aure:aure123%40@clusteraurelia.mdzcepl.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

