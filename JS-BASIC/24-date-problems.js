// Write an algorithm that tells me the time 15 mins later.
// Write an algorithm that tells me the time 5 hours backward.
let future=+new Date() + (15*60*1000)
let min15=new Date(future);
console.log(min15.toString());

let backTime=+new Date() -(5*60*60*60*1000)
let back5=new Date(backTime);
console.log(back5.toString());