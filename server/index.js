import express from 'express';
import router from './routes/route.js';
import dotenv from 'dotenv';
const app= express();
import cors from 'cors';
import bodyParser from 'body-parser';

// //components
import Connection from './database/db.js';


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',router);
 dotenv.config();


 


const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`)); 