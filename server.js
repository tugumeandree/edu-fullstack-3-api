import 'dotenv/config';
import express from 'express';
import {app} from './Routes/routes.js';
import cors from 'cors';


//CREATE SERVER
const server = express();

//port //cors
const port = process.env.PORT || 8001;

//CRUD
//ROOT ROUTE

//read
server.get('/',function(req,res){
res.send('Welcome to the edu server');
});

//MIDDLEWARE 
server.use('/api',app);
server.use(cors());
server.use(express.static('public'));
//run server
server.listen(port,()=>{
    console.log(`The server is running on http://localhost:${port}/`);
});