import bodyParser from 'body-parser';
import express from "express";
import mongoose from 'mongoose';
import path from 'path';
import auth from './routes/auth';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL);

app.use('/api/auth', auth);

app.get('/*', (req, res) => {

	res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(8080, () => console.log("running on localhost:8080"));
