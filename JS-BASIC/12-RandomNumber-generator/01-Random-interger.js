// Generating random number:
//Math.random () generates number from 0 to 1 but it never generates the 1 number.

//Generating  random number from 1 to 10:


//STEP-1:
let RandomNumber=Math.random();
console.log(RandomNumber);
//OUTPUT:
// 0.553026499257173

//STEP-2:
//because i need to generate number from 1 to 10 i am going to multiply by 10 
//if i want to generate upto 5 i am going to multiply it with 5

RandomNumber=RandomNumber*10;
console.log(RandomNumber);
//OUTPUT:
// 5.5302649925717295

//STEP-3:
// I dont want to have decimal value so Math.floor() can be used.
RandomNumber=Math.floor(RandomNumber)
console.log(RandomNumber);
//OUTPUT:
// 5

//Writing the above steps in single statement:

let Random=Math.floor(Math.random()*10);
console.log(Random);
//OUTPUT:
// 4

//In the above steps for generating the random number from 1 to 10 ,10 is never generated so we need to add +1 at the end;

Random=Math.floor(Math.random()*10)+1;
//with this step the 10 is also generated
console.log(Random);

//Random Integer within a Range (Inclusive of Min, Exclusive of Max):
function randomNumber(min,max)
{
    let number=Math.floor(Math.random()*(max-min))+min;;
    return `The number generated is:${number}`;
}
console.log(randomNumber(10,15));

// Random Integer within a Range (Inclusive of Both Min and Max):
function randomNum(min,max)
{
    let number=Math.floor(Math.random()*(max-min+1))+min;
    return `The number generated is:${number}`;
}
console.log(randomNum(10,15));