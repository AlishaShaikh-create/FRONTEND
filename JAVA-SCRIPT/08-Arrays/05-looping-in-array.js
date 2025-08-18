//LOOPING IN ARRAYS
let arr=[10,20,30,40];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
//OUTPUT:
// 10
// 20
// 30
// 40
console.log("----------------------------");

const array= [10,20,30,40,50,60,70,80,90, {a:1,b:9},'fawaz','hi'];
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}
//OUTPUT

// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// { a: 1, b: 9 }
// fawaz
// hi

console.log("----------------------------");

let num=[[10,20,30],[40,50],[60,70]];
for(let i=0;i<num.length;i++)
{
    for(let j=0;j<num[i].length;j++)
    {
        console.log(num[i][j]);
    }
}
//OUTPUT:
// 10
// 20
// 30
// 40
// 50
// 60
// 70
console.log("----------------------------");
let a=[3432,34234,235,23,[99,98,97,[10,200,10]]];
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
    for(let j=0;j<a[i].length;j++)
    {
        console.log(a[i][j]);
    
      for(let k = 0; k <a[i][j].length; k++){
            console.log(a[i][j][k]);
        }
    }
}
console.log("--------------------")
