import express from 'express';
// import {user} from '../Models/db';
export const app = express.Router();

//CREATE
app.post('/',(req,res)=>{
    res.send('You have posted something to the EDU api');
});

//READ
app.get('/',(req,res)=>{
    res.send('Welcome To The EDU api');
});

const user = {
    _id:'1',
    name:'Michael',
    email:'michael@gmail.com'
};

app.get('/users',(req,res)=>{
    // res.send('These are The EDU api users');
    res.json (user);
})

//UPDATE
app.put('/users',(req,res)=>{
    res.send('EDU api user updated');
})
//DELETE
app.delete('/users',(req,res)=>{
    res.send('EDU api user deleted');
})