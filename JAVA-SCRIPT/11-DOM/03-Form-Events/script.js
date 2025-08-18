let form=document.querySelector("form");
form.addEventListener("submit", function(event)  // submit is a form event  
{
  //To prevent default action because of form we have a special event called preventDefault
       event.preventDefault();
       console.log("form submitted");
    alert("form submitted");
})