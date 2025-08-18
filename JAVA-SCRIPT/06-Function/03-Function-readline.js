//Function to add 2 numbers
var read=require("readline-sync");

function sum()
{
    let num1=read.questionInt("Enter the first number:");
    let num2=read.questionInt("Enter the second number:");
    let sum=num1+num2;
    return sum;
}
console.log(sum())