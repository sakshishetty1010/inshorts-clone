import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Dotenv from 'dotenv'

//components
import Connection from './collections/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';


const app = express();
Dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}))
app.use('/',Route);


const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT,()=>console.log(`Server is running successfully on ${PORT}`))

DefaultData();