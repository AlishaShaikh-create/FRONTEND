//INPUT THE ELEMENTS OF THE MATRIX:
var read=require("readline-sync");
function inputMatrix()
{
let rows=read.questionInt("Enter Rows:");
let cols=read.questionInt("Enter Column:");
let matrix = new Array(rows);

//console.log(matrix); //matrix created with number of rows
//OUPUT:[ <2 empty items> ]

for(let i=0;i<matrix.length;i++)
{
    matrix[i]=new Array(cols);
}
console.log(matrix);

for(let i=0;i<matrix.length;i++)
{
    for(let j=0;j<matrix[i].length;j++)
    {
       matrix[i][j]=read.questionInt(`Enter the element at ${i} row and ${j} column:`);  
    }
}
 console.log(matrix);
}
inputMatrix();
