//WHILE LOOP
let i=3;
while(i)
{
    console.log(i);
    i--;
}
console.log(i);//0  why it does not take -VE numbers over here
console.log("---------------------------------------");

// How while(i) Works
// The condition while(i) checks whether i is truthy.

// In JavaScript, numbers like 3, 2, and 1 are truthy, but 0 is falsy.

// So once i becomes 0, the while loop stops executing.

console.log("Pre Increment");
let j = 0;
while (++j < 5) console.log( j );
 
console.log("---------------------------------------");

console.log("Post Increment");
let k = 0;
while (k++ < 5) console.log( k );
console.log(k);


// The “do…while” loop
// The condition check can be moved below the loop body using the do..while syntax:
do{
    //this block always executes
}while(condition)