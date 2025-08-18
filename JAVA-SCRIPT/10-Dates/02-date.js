let today=new Date();
console.log(today);
//2025-08-04T16:09:51.842Z //ISO

//THE DIFFERENCE BETWEEN UTC AND ISO
//https://medium.com/clean-architecture/clearly-understand-utc-and-iso-before-using-dates-in-ui-apps-0d905c00b973
console.log(today.toString());

//THE EPOCH : the number of seconds from the 1st jan 1970
//https://medium.com/@kavindaperera25/what-is-the-epoch-time-f46c94e7a6e7

let today4=+new Date();
console.log("The todays date is:" ,today4);
let tomorrow5=+new Date(" Aug 05 2025 23:17:13 GMT+0530 (India Standard T");
console.log("The Tomorrow time is :",tomorrow5);
console.log(tomorrow5-today4)