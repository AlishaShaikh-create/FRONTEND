// var read=require("readline-sync");
import read from 'readline-sync';
function recreateInputMatrix()
{
   var rows=read.questionInt("Enter the number of rows:");
   var cols=read.questionInt("Enter the number of colums:");
   let matrix=new Array(rows);
  
for(let i=0;i<cols;i++)
{
    matrix[i]=new Array(cols);
}
for(let i=0;i<matrix.length;i++)
    {
        for(let j=0;j<matrix[i].length;j++)
        {
            matrix[i][j]=read.question(`Enter the elenemt at ${i+1}th row and ${j+1} th column:`);
        }
    } 
return matrix; 

}
export default recreateInputMatrix;