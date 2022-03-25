//data format - JSON 
// network format -  http
// const http =  require ('http'); //common js

import http from 'http'; // es6
//host name
const hostname = 'localhost';
//port //cors
const port = 8001;
//createserver
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
res.setHeader('content-Type','text/plain');
res.end('Welcome To The EDU server');
});
//run server
server.listen(port,hostname,()=>{
    console.log(`The server is running on http://${hostname}:${port}/`);
});