//if condition
// if(conditon )
// {
     //write something
// }

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// if(0)
// {
//     console.log("helloo");
// }
// //The above block of code never execute 

// let year=2025;
// let comd=(year==2025)//true will be stored in comd
// if(comd)//this block execute because it is true
// {
//     console.log("hello");
// }

// //if else
//     if(conition){
//         //if true execute
//     }else{
//         //if false execute this
//     }

//if else if else
//There can be more else if blocks. The final else is optional.
    // if(condition1)
    // {
    //     //if true execute 
    // }else if(condtion2)
    // {
    //     //if condition1 is false then else if condition is executed
    // }
    // else
    // {
    //   // if  condition is true then else block executes~
    // }

 //ternary operator   

 let age=10;
 age>=18 ? console.log("U can drive"):console.log("u cant drive");

 let a=10;
 let b=20;
 let res=(a+b<4)?console.log("Over"):console.log("below");

 // ternary operator
var loggedin = false ? console.log('Show Logout Button') : console.log('Show Login Button') 
 
 let age1=18;
 if(age>=18)
 {
    console.log("Approve");
 }else{
    console.log("not approve");
 }

 // login detils
 let email=true;
 let facebook=false;
 let google=true;
 if(email&&facebook&&google)
 {
    console.log("Login successful");
 }else{
    console.log("login failure");
 }

// Check temparture

/**
 * Temp below 20 its cold, winter
 * Temp above 40 its hot, summer
 * Temp between 20 and 40 Normal, spring
 * */

let temparture = 200;
if(temparture<20)
{
    console.log("cold");
}else if(temparture>=20 && temparture<=40)
{
    console.log("spring");
}
else{
    console.log("hot");
}

//using switch statement

// /**
//  * Create a program where you take user role
//  * and return user priviliges for that role
//  * Roles: admin, sub-admin, user, teacher
//  * Admin - Get Full Access
//  * Sub-Admin - Gets Access to delete/create courses
//  * Teacher - Gets access to create/delete tests
//  * User - Gets access to only consume the content.
//  */

var read=require("readline-sync");
var role=read.question("Enter the role which u want ");
switch(role){
   case "admin":console.log("get full access");break;
   case "sub-admin":console.log("Gets Access to delete/create courses");break;
   case "Teacher":console.log("Gets access to create/delete tests");break;
   case "User":console.log("Gets access to only consume the content.");break;
   default:console.log("Wrong input");break;
}

