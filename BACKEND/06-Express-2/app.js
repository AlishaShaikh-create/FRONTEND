import express from 'express';
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT=5000;

app.get('/',(req,res)=>{
    res.send("Hello the server  :) ")

})

app.post('/',(req,res)=>{
  console.log(req.body);  
     res.send("request send");
})

app.listen(PORT,(req,res)=>{
    console.log(`The port is running at the PORT ${PORT}`);
})


