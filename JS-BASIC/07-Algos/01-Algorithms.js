// ALGORITHMS IN JS
const arr=[2,4,77,66,13,17,19,33,45,67];
//FINDING EVEN NUMBER IN THE ARRAY
function evenArr()
{
    let arr2=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}
evenArr();