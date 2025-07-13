/* 
0 * 9 + 8        = 8

9 * 9 + 7        = 88
98 * 9 + 6       = 888
987 * 9 + 5      = 8888
9876 * 9 + 4     = 88888
98765 * 9 + 3    = 888888
987654 * 9 + 2   = 8888888
9876543 * 9 + 1  = 88888888
98765432 * 9 + 0 = 888888888
*/


let temp='';
let num='';

for(let i=9;i>=2;i--)
{
    temp+=i;
    let space="";
    num=temp*9;//num='9'
    for(let j=1;j<i;j++)
    {
        
        space+=' ';
        // console.log(`${temp} * 9 + ${i-2} ${space} =`);
    }
console.log(`${temp} * 9 + ${i-2} ${space} =${num+(i-2)} `);
}
console.log("--------------------------------");
//  Pattern 1):

//  * * * * * 
// * * * *
// * * * 
// * *
// *
let t='';
for(let i=1;i<=5;i++)
{
    
    for(let j=5;j>=i;j--)
    {
          t+="*";
    }
}console.log(t);

console.log("--------------------------------");
// Floyd's Triangle
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15
let count=1;
for(let i=1;i<=5;i++)
{
    let t1='';
    for(let j=1;j<=i;j++)
    {
       t1=t1+count +" ";
       count++;
    }console.log(t1);
}

console.log("--------------------------------");
