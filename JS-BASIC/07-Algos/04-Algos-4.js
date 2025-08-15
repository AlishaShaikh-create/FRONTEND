//1) Write an Algorithm to subtract two integers without using "minus(-)" operator
function subtract(a,b)
{
    let difference=(a +(~b ))+1;
    return difference;
}
console.log(subtract(10,5));

const obj = {a:1, b:2, c:3, d:4, e:5, f:6};

// for (let ele in obj){
//     console.log(ele);
// }

for (let keys in obj){
        console.log(keys, obj[keys]);
    }