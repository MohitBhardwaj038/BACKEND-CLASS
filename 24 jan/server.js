const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.send('hello G23'); 
});

app.get('/mohit', (req, res) => {
    // res.send('hello mohit');
        res.render('mohit.ejs');
});

app.listen(3000, ()=>{
    console.log("port 3000 running");
});