//Await Keyword :
//pauses the execution of its surrending async function until the promise is settled (resolved or rejected)


//to use await make sure that our function is async function


function getNum()
{
//    console.log(5);
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let num=Math.floor(Math.random()*10)+1
    console.log(num);
    resolve();
    },1000)
   })
}

//WHAT DOES AWAIT DO BASICALLY?
//until  a particular function is not resolved that is either is should get rejected or it should get resolve it does not execute the other async function
async function demo()
{
  await getNum() 
  await getNum()
  getNum()

}

demo();

//HANDLING REJECTION IN PROMISE WITH AWAIT
// IF PROMISE GET REJECTED MAKE SURE THAT YOU WRITE THE AWAIT STATEMENT IN THE TRY BLOCK
