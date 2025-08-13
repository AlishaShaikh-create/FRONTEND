//ADDITION OF MATRIX:
import read from 'readline-sync';
function inputMatrix()
{
   let row=read.questionInt("Enter the rows:");
   let cols=read.questionInt("Enter the colums:");
   let matrix=new Array(row);
   for(let i=0;i<matrix.length;i++)
   {
    matrix[i]=new Array(cols);
   }
   

   //taking each  element input from the matrix:
   for(let i=0;i<matrix.length;i++)
   {
    for(let j=0;j<matrix[i].length;j++)
    {
        matrix[i][j]=read.questionInt(`Enter the element at ${i} th row and ${j}th column :`);
    }
   }
   return matrix;
}

// console.log(inputMatrix());

function additionMatrix()
{
   console.log("Enter the element of the matrix A:");
   let matrixA=inputMatrix();
   console.log("Enter the element of the matrix B:");
   let matrixB=inputMatrix();
   if((matrixA.length==matrixB.length)&&(matrixA[0].length==matrixB[0].length))
   {
      let sum=new Array(matrixA.length)
      for(let i=0;i<matrixA.length;i++)
      {
          sum[i]=new Array(matrixA[0].length);
      }

     for(let i=0;i<sum.length;i++)
     {
        for(let j=0;j<sum[i].length;j++)
        {
            sum[i][j]=matrixA[i][j]+matrixB[i][j];
        }
     }
     console.log(sum);
   }
   else{
    console.log("Invalid matrix");
   }

}
additionMatrix();



























