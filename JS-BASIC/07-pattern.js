// * * * *
// * * * *
// * * * *
// * * * *
// * * * *

let temp='';
for(let i=0;i<=4;i++)
{
    temp+="* ";
}
// console.log(temp);
for(let i=0;i<=4;i++)
{
    console.log(temp);
}

console.log("---------------------------------------");

/*
1
12
123
1234
12345
123456
1234567
12345678
*/
let temporary='';
for(let j=1;j<=8;j++)
{
  temporary+=j;
  console.log(temporary);
}
console.log("---------------------------------------");
/*
0
9
98
987
9876
98765
987654
9876543
98765432
987654321
*/

console.log("0");
let t='';
for(let j=9;j>=1;j--)
{
    t+=j;
    console.log(t);
}

console.log("---------------------------------------");
/*
12345
1234
123
12
1
*/
for(let j=5;j>=1;j--)
{
    let t='';
    for(let i=1;i<=j;i++)
    {
        t+=i;
    }
    console.log(t);
}
console.log("---------------------------------------");
/*
     8
    88
   888
  8888
 88888
*/

let num = '';
for(var i = 1; i<=5;i++){
    var space = '';
    num += "8";
    for(var j = 1; j<=5-i;j++){
        space += ' ';
    } // this loop prints spaces
    console.log(space + num);
}

console.log("---------------------------------------");
/**
    1
   12
  123
 1234
12345
 */
let num1 = '';
for(var i = 1; i<=5;i++){
    var space = '';
    num1 += i;
    for(var j = 1; j<=5-i;j++){
        space += ' ';
    } // this loop prints spaces
    console.log(space + num1);
}
