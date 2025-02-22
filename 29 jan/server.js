const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.send("hello mohit");
});

app.get('/index', (req,res)=>{
    res.render('index');
});

app.get('/random', (req,res)=>{
    let todo = ["apple", "banana", "orange", "mango"];
    let name = "rajesh";
    let mohit={
        name:"Mohit",
        age:19,
        dist:"bhiwani",
        college:"Chitkara university",
      }
    res.render('random',{finalName:name, fruits:todo, mohit:mohit});
}); 

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });