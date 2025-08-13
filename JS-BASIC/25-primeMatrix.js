// Write a function to find the prime numbers in the 4x4 matrix:

// Input: [[1,2,3,4],[5,6,8,9],[8,9,5,5,],[5,7,5,5]]
// Output: [2,3,5,5,7,5,5,5];

// Input: [[5,4,6,1],[5,0,5,3],[2,5,8,9],[0,2,3,5]]
// Output: [5,5,5,3,2,5,2,3,5]

import recreateInputMatrix from "./20-recreate-input-matrix.js";
let matrixA=recreateInputMatrix();
function main()
{
    let prime=new Array();
    
    for(let i=0;i<matrixA.length;i++)
    {
        for(let j=0;j<matrixA[i].length;j++)
        {
            if(primeNumber(matrixA[i][j]))
            {
               prime.push(matrixA[i][j]);
            }
        }
    }
    return prime;
}

console.log(main());

function primeNumber(num)
{
    let factor=0
    for(let i=2;i<num;i++)
    {
       if(num%i==0)
       {
        factor=factor+1;
        break;
       }
    }
    return factor==0?true:false;
}
console.log(primeNumber(9))
