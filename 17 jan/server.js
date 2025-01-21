const express = require('express');
const app = express();

app.use((req, res, next)=>{
    // console.log('Middleware 1');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.ip);
    // console.log(new Date());
    next();
});

app.get('/', (req,res) => {
    res.send('hello world');
});

app.get('/pokemon', (req,res) => {
    res.send('Greninja');
});
app.get('/reddit/:data', (req,res) => {
    console.log(req.params);
    res.send('Reddit page');
});
app.get('/profile/:commentId/:Id',(req,res)=>{
    console.log(req.params);
    const {commentId,Id}=req.params;
    // res.send('print the commentId and Id');
    res.send(`Comment ID: ${req.params.commentId} and ID: ${req.params.Id}`);
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})