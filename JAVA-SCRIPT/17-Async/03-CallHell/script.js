h1=document.querySelector("h1");

//Instead of writing all this stuff we need an optimize code for the below statement
// setTimeout(()=>{
//     h1.style.color='red';
// },1000);

// setTimeout(()=>{
//     h1.style.color='orange';
// },2000)

// setTimeout(()=>{
//     h1.style.color='blue';
// },3000)

function changeColor(color,delay,nextColorChange)
{
    
    setTimeout(()=>
    {
       h1.style.color=color; 
       nextColorChange();
    },delay);
}

changeColor("red",1000);
changeColor("orange",2000);
changeColor("green",3000);