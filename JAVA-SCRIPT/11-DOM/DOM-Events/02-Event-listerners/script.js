// onclick and onmouseenter help us to set only one value for any event 

// EVENT LISTENERS:
// SYNTAX:
// Element.addEventListerner("click",callback)
//here click is an event we can even write may event like drag,keyboard key

//DRAWBACK OF onclcik

let btns = document.querySelectorAll("button");

for(let btn of btns){
    
    // btn.onclick=sayhello;
    // btn.onclick=sayName;

    //if you look at the output the only the sayName go executed onlick work for the single event 
    btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayName);
}

function sayhello()
{
    console.log("Heylo");
}

function sayName()
{
    console.log("Naaaaaameeee");
}