const express=require('express');
// console.log(express);
const app=express();
// console.log(appCLS
// );
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send('About Us');
});
app.get('/contact',(req,res)=>{
    res.send('Contact Us');
});

app.get('*',(req,res)=>{
    res.send('404 Page Not Found');
});

app.all('*',(req,res)=>{
    res.send('404 Page Not Found');
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})