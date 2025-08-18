//filter:
// As map function return a new array filter method filter the value and return the new array

let number=[2,4,5,6,8,9,10,11,12];
let even=number.filter((ele)=>{
    return ele % 2 == 0; //if true then store it array
});
console.log(even);

let odd=number.filter((ele)=>(ele%2 != 0));
console.log(odd);