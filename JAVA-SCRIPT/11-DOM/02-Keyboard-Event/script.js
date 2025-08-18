let btn=document.querySelector("button");

btn.addEventListener("click",function(event){ 
    
    //in this 'event' is an default argument ,instead of writing event we can even write 'e' or 'evt' or what ever be the name 

    console.log(event); //this is an pointer event 
    console.log("button was clicked");
})

//KEY BOARD EVENTS:
let input=document.querySelector("input");
let div=document.querySelector("div");
input.addEventListener('keydown',function(event){
    console.log(event) //default event is keyboard event
    div.classList.add("style")
    div.innerText=input.value;
})

//keyboard event have 2 main property
        //   KeyboardEvent
        //     /  \
        //  code    key

//KEY PRESS:
input.addEventListener("keypress", function(event)
{
   console.log("key = ",event.key);
   console.log("code = ",event.code);
})   

//KEY DOWN:
input.addEventListener("keydown",function(event)
{
    console.log("code = ", event.code); //keydown has ArrowUp(U) , ArrowDown (D),ArrowLeft(L),ArrowRight(R)
    if(event.code=="ArrowUp") //here we can even write the event.code == "keyU"
    {
        console.log("Character moves forward");
    }else if(event.code=="ArrowDown")
    {
        console.log("Character moves backword");
    }
    else if(event.code=="ArrowLeft")
    {
        console.log("Character moves Left");
    }
    else if(event.code=="ArrowRight")
    {
        console.log("Character moves Right");
    }
})