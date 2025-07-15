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

function roles(user,role)
{
    var read=require('readline-sync');
    user=read.question("Enter your name:");
    role=read.question("Enter your role:");
    console.log(`Your name is ${user} and role is ${role}`);
}
roles();