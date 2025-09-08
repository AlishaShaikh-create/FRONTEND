// Promise chaining;

function storeData(data)
 {
   return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>5){
         resolve("Success:data was saved");
    }else{
        reject("failure: data was not saved");
    }
   
   })

 }
//  storeData("alisha")
//  .then(
//     ()=>{
//         console.log("Data1 saved .promise was resolved");
//         storeData("hello world")
//         .then(
//             ()=>{
//                 console.log("Data2: saved")
//             }
//         )
//     }
//  )
//  .catch(
//     ()=>{
//         console.log("promise was rejected");
//     }
//  );

// more improved version for the above code is:
storeData("Alisha")
.then((result)=>{   //inside the .then((result)=>{}) result will have the value that was written in the resolve state
    console.log("Data 1 got saved:",result);
    return storeData("xyz")
})
.then((result)=>{
    console.log("data2:saved",result);
})
.catch((error)=>{ //error represent the value that was written in the rejecct state
    console.log("Promise rejected",error);
})
