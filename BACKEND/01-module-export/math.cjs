// 3.Third way of exporting the module
module.exports.sum=(a,b) => a+b;
const mul=(a,b)=> a*b;
const g=9.8;
const pi=3.14;

//  1. First way of sending the module
// let obj={
//     sum:sum,
//     mul:mul,
//     g:g,
//     pi:pi,
// }
// module.exports=obj;


// 2. nd way of sending the module

// module.exports={
//     sum:sum,
//     mul:mul,
//     g:g,
//     pi:pi,
// }