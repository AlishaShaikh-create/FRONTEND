//square and sum the array elements using the arrow function and then find the average of the array
let arr=[1,2,3,4,5];
let newarr=arr.map((ele)=>{
    return ele*ele;
});
console.log(newarr);
let sum = newarr.reduce((acc,ele)=>acc+ele,0)
let avg=sum/newarr.length;
console.log(avg);

