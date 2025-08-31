//Promise is basically an object 
//syntax to create a new promise
// new Promise((resolve,reject)=>{
//     //write the code here
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
function dataSaved(data){
    let promise=new Promise((resolve,reject)=>{
        if(data)
        {
            resolve("data saved");
        }else{
            reject("data rejected");
        }
    })
    return promise;
}

dataSaved("alisja").then(()=>{
 console.log(" successfully executed");
 return dataSaved("Alisha");
}).then(()=>{
    console.log("data 2 saved");
    return dataSaved("john");
})
.then(()=>
{
    console.log("Data3  saved")
})
.catch(()=>{
    console.log("errroorrr");
})