// Map 
//forEach method just print the value it neither store nor return
// the Map is used iterates through each element of the array and  its return the value and store it in a new array of same size

let num=[1,2,3,4,5];
let newarr=num.map((ele)=>ele*2);
console.log(newarr);

let double=num.map((ele)=> {
    return ele*ele
} );


