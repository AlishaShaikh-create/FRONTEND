//Functions  in JS
//Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.
// function are classified into 2 Types 
// 1.Build-in Functions
// 2.user defined Functions
function sayMsg()
{
    console.log("hello world");
}
// The above part of code is function definition
// The function call
sayMsg();


//VARIABLES DECLARATION IN FUNCTION
//variables declared in function can be visible in that function only
function showMsg()
{
    var message="hello from showMsg function";//varibles declared in function cannot be accessed outside the function..
    console.log(message);
}
showMsg();
// console.log(message);   //Error ReferenceError: message is not defined


//FUNCTION WITH ARGUMENTS


function sayHello(name)
{
  console.log("hello",name);
}
sayHello("Alisha");

/**
 * Define a function that can answer the role a user
 * A user can be on following roles:
 * admin with all access
 * subadmin with access of create/delete courses
 * teacher - with access to create/delete tests
 * user - consume/view content only
 * other - guest user
 * 
 * Input getUserRole(name, role)
 */
var read=require('readline-sync');
function roles(user,role)
{
    
    user=read.question("Enter your name:");
    role=read.question("Enter your role:");
    console.log(`Your name is ${user} and role is ${role}`);
}
roles();

/**
 * Make a function that will return if the input value is even or not.
 * isEven();
 */
function isEven(n)
{
    n=read.question("Enter the number:");
    if(n%2===0)
    {
        return true;
    }else{
        return false;
    }
}
console.log(isEven());

// RETURN IN FUNCTION
// Function should return something.
// The return is used to return the value of the function call;
// The reutrn statment dnotes that the function has ended.
// If a function is not returning something it will by default return an undefined value.
function msg()
{
    return "hello";
    console.log("hello ");//does not print this line because return indicates the end of the statement
}

//DEFAULT VALUE
function random(name,text=anotherFnc())
{
    console.log(name,text);
}
function anotherFnc()
{
    console.log("hello");
}
random("alis");

//RETURNING VALUE
//sum of 2 numbers and returing value
function sum(a,b)
{
    return a+b;
}
console.log(sum(2,3)); //5