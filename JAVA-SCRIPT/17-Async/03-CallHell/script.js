let h1=document.querySelector("h1");
// h1.style.color="red";

//now i dont want to color to change directly but the color should change after 2 seconds 

//set Timeout function can be used

// setTimeout(()=>{
// h1.style.color="blue";
// },2000);
// setTimeout take 2 parameter 1.st is call back function and 2nd is the time in milliseconds


// setTimeout(()=>{
// h1.style.color="orange";
// },3000);

// setTimeout(()=>{
// h1.style.color="red";
// },4000);

//To write the above thing in more better way we use

function changeColor(color,delay,nextColorChange) //nextColorChange is the call back
{
    setTimeout(()=>{
        h1.style.color=color;
        nextColorChange();
    },delay);
}
changeColor('red',1000,()=>{
 changeColor('blue',1000,()=>{
    changeColor("green",1000)
 })
})

//what is callback?:
//A callback is a function passed as an argument to another function, often used in asynchronous operations like:
//- Reading files
// - Making API requests
// - Handling user input


//call back nesting =>Call back hell

