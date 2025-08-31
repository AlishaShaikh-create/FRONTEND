//PROMISE:
//promise is an javascript object that eventual completion or failure of an asynchronous operation and its resulting value
//PROMISES HAVE 3 STATES:
//1.success
//2.failure
//3.pending

//CRUD :CREATE-READ-UPDATE-DELETE

//the below code does not run in the node but it runs in the console of the browser
// function savetoDb(data)
// {
//    return new Promise((success,failure)=>{
//     let internetconnection=Math.floor(Math.random()*10)+1;
//     if(internetconnection>4)
//     {
//         success("data was saved");
//     }else{
//         failure('week connection');
//     }
//    })
// }
// savetoDb("Alisha");

//how to create a promise?
// let promise=new Promise(function(resolve,reject)
// {
// //write the block of code here
// resolve("DONE");
// reject("error");
// });

//creating a promise
function createPromise(num)
{
    let promise=new Promise((resolve,reject)=>
    {
      if(num>4){
        resolve(num);
      }else{
        reject(num);
      }
    })
    
   return promise;
}

console.log(createPromise(3));
console.log(createPromise(30));
console.log(createPromise(34));
