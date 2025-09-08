//Promise is basically an object 
//syntax to create a new promise
// new Promise((resolve,reject)=>{
//     //  write the code here
    //    if resolve what should it return
    //    else if reject what it should do
// });

// const promise=new Promise((resolve,reject)=>{
//     const success=true;
//     if(success){
//         resolve("Operation successfull")
//     }else{
//         reject("operation failure");
//     }
// });
// promise.then((ele)=>console.log("then block",ele))
// .catch(console.log("error caught"));

//we can even use the multiple then blocks
//LETS SEE HOW:

// function dataSaved(data){
//     let promise=new Promise((resolve,reject)=>{
//         if(data)
//         {
//             resolve("data saved");
//         }else{
//             reject("data rejected");
//         }
//     })
//     return promise;
// }

// dataSaved("alisha").then(()=>{
//  console.log(" successfully executed");
//  return dataSaved("Alisha");
// }).then(()=>{
//     console.log("data 2 saved");
//     return dataSaved("john");
// })
// .then(()=>
// {
//     console.log("Data3  saved")
// })
// .catch(()=>{
//     console.log("errroorrr");
// })


// AGAIN ABOUT PROMISE:
function accept(data)
{
    return new Promise((resolve,reject)=>{
        const success=false;
        if(success)
        {
            resolve("promise resolved")
        }else{
            reject("promise reject");
        }
    })
}

let request = accept("Alisha");
request
.then(()=>{
    console.log("inside 'then' block")
})
.catch(()=>
{
    console.log("inside catch block");
})

/**
 *    then mathod itself takes an callback (execute if the resolve state executed)
 * 
 * catch :it also takes an call back (Execute after the catch block)
 *
 * 
 */