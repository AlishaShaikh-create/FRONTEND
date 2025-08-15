// Map 
//forEach method just print the value it neither store nor return
// the Map is used iterates through each element of the array and  its return the value and store it in a new array of same size

let num=[1,2,3,4,5];
let newarr=num.map((ele)=>ele*2);
console.log(newarr);

let double=num.map((ele)=> {
    return ele*ele
} );


//filter:
// As map function return a new array filter method do not return a new array.

let number=[2,4,5,6,8,9,10,11,12];
let even=((ele)=>{
    return ele%2==0;
});
// console.log(even);