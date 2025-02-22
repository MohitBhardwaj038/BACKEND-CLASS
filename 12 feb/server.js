const express = require('express');
const app = express();
const port = 3000;

const verify = (req,  res, next) => {
    if(req.query.otp === '1234'){
        console.log("payment OTP verified");
        next();
    }
    else{
        res.send("wrong otp");
        console.log("otp is wrong");
    }
    console.log("Verifing middleware opt: ");
    next();
}


app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
})
app.use('/payment', verify, (req, res, next) => {

    console.log('Payment middleware');
    next();
})

app.get('/', (req, res) => {
    res.send("hello g23");
})

app.get('/payment', (req, res)=>{
    res.send("Payment page");
})

app.listen(port, ()=>{
    console.log(`server running at port http://localhost:${port}`);
})