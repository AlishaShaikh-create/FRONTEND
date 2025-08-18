// let btn=document.querySelector("button");//here we have selected the element

// btn.onclick= (()=>console.log("Button was clicked")); //by using the arrow function 

// btn.onclick= function(){   //by using the function  it can be even done in this way
//     console.log("Alisha..");
// }

//Here we can even write the seperate function 
//Here say hello function was created 

// function sayHello()
// {
//     alert("say hello");
// }

// btn.onclick=sayHello; //sayHello function was assigned;
// Assigns the sayHello function to run when the button is clicked.
//The reason we write btn.onclick = sayHello; without parentheses is because we're assigning a function reference, not calling the function immediately.
//Writing sayHello without parentheses gives the browser a reference to the function.
//The browser will then call that function later, when the onclick event happens.

//If we have multiple buttons then we can do the following

let buttons=document.querySelectorAll("button");

for(let button of buttons)
{
    button.onclick=click;
    button.onmouseenter=function(){
        console.log("Cursor Entered on the button")// on mouseenter 
        button.classList.add("btn");
    }
}



function click()
{
    console.log("click");
    alert("button was clicked");

}
