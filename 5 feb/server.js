const express = require('express');
const app = express();
const port = 3000;

// app.use(express.static('public'));
app.use('/static', express.static('public'));
app.get('/', (req,res)=>{
    res.send("hello world");
});

app.listen(3000, ()=>{
    console.log(`server is running on 3000`);
});