// The promsie Object represent the eventual completion (or failure) of an asynchronosus operation and its resulting value.

/**
 *  
     PROMISES:
     /     \
 resolve    reject
 (fulfilled)   (not fulfilled)

 */
 
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

// States of the promise
// Promises basically have 3 states:
// fullfilled
// rejected
// pending

// PROMISE :
// promise can be created as :
// const promise=new Promise((resolve,reject)=>{
//     if(success){
//         console.log("Success");
//     }else{
//         console.log("Somethig went wrong");
//     }
// })