function outer()
{
    let a=10;
    function inner()
    {
        let b=20;
        console.log(a +b);

    }
    // inner();
    return inner;
}
let inside=outer();
inside()

