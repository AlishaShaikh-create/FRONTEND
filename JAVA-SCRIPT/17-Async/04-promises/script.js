//lets create a function that stores data in the database ,it actually do not store the data

function storeData(data,success,failure)
{
    // if the internet speed is high then the data gets stored;
    //lets create a random function that stores the data
    
    let internetspeed=Math.floor(Math.random()*10)+1;
    console.log(internetspeed);
    if(internetspeed>4)
    {
         success();
    }
     else{
        failure();
     }
   
    
}
//here we are trying to store the nested form of the data

storeData(10,()=>{
    console.log("data1 was stored");
  storeData("Alisha",
    ()=>{
    console.log("data2 was saved"); 
  },
  ()=>
{
    console.log("weak connection");

})
    
},
()=>{
  console.log("weak connection");
});

//this is the situation of call back hell
//CALLBACK HELL:
//Callback Hell is a situation in JavaScript where multiple nested callback functions make your code look like it’s been through a blender on the highest setting.
// This typically occurs when dealing with asynchronous operations, such as making API requests or handling file I/O, where one operation depends on the result of another or previous One.
// Here’s an example of what callback hell might look like:🥶

//Handling  callback hell?
//1.promises