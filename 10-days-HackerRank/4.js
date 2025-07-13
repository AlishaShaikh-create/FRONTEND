//https://www.hackerrank.com/challenges/js10-function/problem?isFullScreen=true

function factorial(n)
{
    let fact=1;
    if(n==0)
    {
        console.log(1);
    }else{
        for(let i=2;i<=n;i++)
        {
            fact*=i;
        }
       return fact;
    }
}

