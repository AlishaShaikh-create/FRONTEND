let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    h1=document.querySelector('h1')
    let color=randomColor();
    h1.innerText=color;
    div=document.querySelector('div');
    div.style.backgroundColor=color;
});




function randomColor()
{
   let red=Math.floor(Math.random()*255);
   let green=Math.floor(Math.random()*255);
   let blue=Math.floor(Math.random()*255);
   let color=`rgb(${red},${green},${blue})`
   return color;
}
