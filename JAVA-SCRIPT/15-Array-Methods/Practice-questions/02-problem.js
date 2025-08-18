// Create a new array using map function whose each element is equal to the original element plus 5

let arr=[1,2,3,4,5];
let newarr=arr.map((ele)=>ele+5);
console.log(newarr);

//Array whose elements are in upper case of the original array

let str=["tom","jerry"];
let upper=str.map((ele)=>ele.toUpperCase());
console.log(upper);