const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('hello main page');
});

app.get('/search', (req, res)=>{
    console.log(req.query);
    let Name = req.query.name;
    let Age = req.query.age;
    console.log(typeof(Age));
    if(Age==undefined){
        res.send('Please provide age');
    }
    else{
        res.send(`you are searching somthing with age ${Age} of name ${Name}`);
    }
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000.');
});