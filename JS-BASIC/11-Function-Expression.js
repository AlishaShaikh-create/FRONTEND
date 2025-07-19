//FUNCTION EXPRESSION

//previous function syntax
function sayHello()
{
    console.log("Hello...");
}
sayHello();

console.log("----------------------------------------------------------");
//Function expression syntax
//Here we immediately assign it to the variable, so the meaning of these code samples is the same: “create a function and put it into the variable name ”.
let name=function()
{
  console.log("Alisha");
}
console.log(name()); 
//outout 
//Alisha
//undefined
//why undefiend is printed?

// In your code, you're logging the result of calling name(), but the function itself doesn't return anything—it only logs "Alisha" to the console. So here's what actually happens:


// the about it can be modified as 
let nam=function()
{
  return "Alisha";
}
console.log(nam());


console.log("----------------------------------------------------------");

//copying one function to another
function greet()    //1.function definition
{
    console.log("greeting");
}

let func=greet();// this line simply means that the greet function is called 
let hi=greet;//here we are assigning function definition to the hi variable so now hi is also a function
greet();//greet function is called and it print greeting

hi();//hi is called and it also print greeting

