//Reduce:
//reduce function reduces and gives a single value
// arr.reduce(reducer function with 2 variables for(accumulator,element))
let finalvalue=[1,2,3,4].reduce((res,ele)=>(res+ele));
console.log(finalvalue);

//finding maximum of the array using reduce function
let arr=[1,2,3,4,5,6,7,8];
let maximum=arr.reduce((acc,ele)=>{
   if(acc<ele)
   {
    return ele;
   }else{
    return acc;
   }
})
console.log(maximum);

//PROBEMS:
//CHECK IF ALL NUMBER IN OUR ARRAY ARE MULTIPLE OF 10 OR NOT

let array=[2,1,4,5,10];
let result=arr.every((ele)=>ele%2==0)
console.log(result);

//create a function to find the minimum number in an array

let min=arr.reduce((min,ele)=>
{
    if(min<ele){
        return min;
    }else{
        return ele;
    }
})
console.log(`The minimum value is ${min}`);

function getMin(nums){
    let min=nums.reduce((min,ele)=>
{
    if(min<ele){
        return min;
    }else{
        return ele;
    }
});
return min;
}
console.log(getMin([10,20,30,5]));