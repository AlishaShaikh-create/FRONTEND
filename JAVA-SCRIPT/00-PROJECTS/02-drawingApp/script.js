const canvas=document.getElementById("drawing");
const ctx=canvas.getContext('2d');
let x=0;
let y=0;
let isdrawing=false;

canvas.addEventListener("mousedown", (e)=>
{
    x =e.offsetX;
    y =e.offsetY;
    isdrawing = true;
});

 canvas.addEventListener("mousemove", (e)=>{
       if(isdrawing)
       {
           drawLines(ctx ,x,y,e.offsetX,e.offsetY)
           x=e.offsetX
           y=e.offsetY
       }
 });
 
window.addEventListener("mouseup", (e) => {
  if (isdrawing) {
    drawLines(ctx, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isdrawing = false;
  }
});

 function drawLines(ctx,x,y,x1,y1)
 {
     ctx.beginPath();
     ctx.strokeStyle="black";
     ctx.lineWidth=1
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1);
    // ctx.lineCap = "round";
    ctx.stroke();
    ctx.closePath();
 }