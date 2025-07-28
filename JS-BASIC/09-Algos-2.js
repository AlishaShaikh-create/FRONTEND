// Write an algorithm to find if a given array has any primes numbers
//  and store it a new array.

const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67,9];
function isPrime(num)
{
    let factor=0;
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            factor++;
        }
    }
    return factor==0?true:false;
}

//printing prime numbers in an seperate array
function primeArray()
{
    let prime=[];
    for(let i=0;i<arr.length;i++)
    {
        if(isPrime(arr[i]))
        {
            prime.push(arr[i]);
        }
    }
    console.log(prime);
}
primeArray();