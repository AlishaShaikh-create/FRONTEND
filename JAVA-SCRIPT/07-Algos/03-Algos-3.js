// Write an algorithm to mulitply two numbers without using *;
/**
 * Amazon INterview Question (<2min);
 */

function mulitply(num1,num2)
{
    let product=0;
    for(let i=0;i<num2;i++)
    {
       product=product+num1;   
    }
    console.log(product);
}
mulitply(10,5);