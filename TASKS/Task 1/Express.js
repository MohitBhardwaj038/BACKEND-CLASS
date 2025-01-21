const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use((req,res,next)=>{
    console.log('Middleware 1');
    const requestDetails = {
        timpestamp : new Date().toISOString(),
        ipAdress : req.ip,
        url : req.url,
        protocol : req.protocol,
        method : req.method,
        hostname : req.hostname
    };
    const logEntry = JSON.stringify(requestDetails);
    const logFilePath = path.join(__dirname,'requests.log');
    fs.appendFile(logFilePath, logEntry +'\n', (err) => {
        if(err){
            console.error('Error writing to file:',err);
        }
    });
    
    next();
});


app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send('About Us');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}); 