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

