function sayHello()
{
    return (
       console.log("hello")
    )
}

function sayBye()
{
    return console.log("Bye")
}

function handlingdblClick(){
     return console.log("The button was dobble clicked");
}

function Button()
{
    let style={textAlign:"center"}
    
    return(
        <>
        <div style={style}>
            <button onMouseOver={sayHello} >Click me!</button>

        <p onClick={sayBye }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, quasi fuga. Voluptatum amet suscipit, voluptates veritatis eos cupiditate incidunt quia non officia odit placeat aliquam vero tenetur aliquid, ipsam molestiae?</p>
         <button onDoubleClick={handlingdblClick ()}>Click twice</button>
        </div>
        
        </>
    )
}

export default Button;