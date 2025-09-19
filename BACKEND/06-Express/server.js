import express from 'express' // importing the express , here the express is bacially an function

const app=express(); //this function value is stored in the variable app

// console.log(app); //object gets print

/**
 * 
 * PORT:

🔹 What is a Port?

A port is like a door or channel on a computer that allows data to enter or leave through the network.

A computer’s IP address is like the building’s address.

A port number is like the apartment/room number inside that building.

👉 This way, multiple services can run on the same computer (same IP) but on different ports.

 */

const PORT=3000; 

//app.use(): 

// app.use((req,res)=>{
//   console.log(req);

// res.send("This is a basic response"); //here i have send the test as an response

// res.send("<h1> Hello this is html form the  response </h1>") //here i have send the html as a respnse

// res.send({
//     name:"Alisha",
//     email:"alisha@dev"
// })
//  console.log("request received");
// })




// app.get('/',(req,res)=>{
//     res.send("hello world");
// })


//app.use() Whenever a request comes in (for a given path), run this function before reaching the final route handler.” 

// -->route handlers:
// A route handler is the function (or group of functions) that gets executed when a request hits a specific route (URL path + HTTP method).

// It’s basically the code that runs when someone visits your route.
// app.METHOD(PATH, HANDLER)


//Now we are sending request to multiple paths:
app.get('/',(req,res)=>{
    res.send("sending request to the root path");
})
app.get('/apple',(req,res)=>{
    res.send("<h1>APPLE </h1>");
})
app.get('/orange',(req,res)=>{
    res.send("<h1>ORANGE </h1>");
})


app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})

// app.get("*",(req,res)=>{
//     res.send("Path does not exits");
// })

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("you send a post ")
})

