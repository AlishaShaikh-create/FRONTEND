// lets create a function that stores data in the database , it actually do not store the data but we will just create a dummy model


function storeData(data,success, failure)
{
  let internetSpeed=Math.floor(Math.random()*10)+1;
  console.log(internetSpeed);
  if(internetSpeed>4)
  {
    // console.log("your data was saved",data);
    success();
  }else{
    // console.log("Your data was not saved");
    failure();
  }
}


// here we r trying to store the data , the data2 only get stored if the data1 get stored this will create a callback hell

storeData("Alisha",()=>{
 console.log("success: Data1 got saved")

 storeData("Shaikh",()=>{console.log("Success: Data 2 got saved")},()=>{
  console.log("failure: Data 2 did not got saved")
 })
},()=>{
  console.log("failure : data did not saved")
});



//this is the situation of call back hell
//CALLBACK HELL:
//Callback Hell is a situation in JavaScript where multiple nested callback functions make your code look like it’s been through a blender on the highest setting.
// This typically occurs when dealing with asynchronous operations, such as making API requests or handling file I/O, where one operation depends on the result of another or previous One.


//Handling  callback hell?
//1.promises