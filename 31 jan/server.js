const express = require('express');
const app = express();
const port = 3000;
app.set("view engine", "ejs");



app.get("/", (req, res) => {
    // res.send("main page");
    res.render("index");
});

app.get("/g23", (req, res) => {
    console.log("get request on /g23 route");
    console.log(req.query);
    res.send("hello g23 GET method handled");
});

app.post("/g23", (req, res) => {
    console.log("post request on /g23 route");
    console.log(req.body);
    res.send("hello g23 POST method handled");
});

app.listen(port, ()=>{
    console.log(`port is running on http://localhost:${port}`);
});