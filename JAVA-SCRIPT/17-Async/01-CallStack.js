function hello(){
    console.log(hello);
}
hello();//calling a function

// a function can call the other function as well

function demo()
{
    hello();
}

demo();