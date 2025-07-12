//Looping statement are used to for repeart a particular task

// The for loop is more complex, but it’s also the most commonly used loop.

// for (begin; condition; step) {
//   // ... loop body ...
// }

//PRINTING NUMBER FROM 1 TO 10
for(let i=1;i<=10;i++) //'i' is declared with let so it has blocked scope 
{
    console.log(i);
}

//console.log(i);//error 'i' cannot be accessed outside the block

//SKIPPING PART

//Any part of for can be skipped.

// For example, we can omit begin if we don’t need to do anything at the loop start.

// Like here:

let i =0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  console.log( i ); // 0, 1, 2
}

//We can actually remove everything, creating an infinite loop:
// for(;;)
// {
//  //Even this loop work fine   
// }

//Break
//To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

//Continue

//If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

//labels in the nested loop

// https://javascript.info/while-for