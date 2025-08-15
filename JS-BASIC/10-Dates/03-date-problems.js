// Write an algorithm that tells me the time 15 mins later.

let future=+new Date() + (15*60*1000)
let min15=new Date(future);
console.log(min15.toString());


// Write an algorithm that tells me the time 5 hours backward.
let backTime=+new Date() -(5*60*60*60*1000)
let back5=new Date(backTime);
console.log(back5.toString());

/**
 * Write an algorithm, function inputs from browser format.
 * Find if entered date is backward or not?
 * 
 * Ex. Productivity Tools, Calendars, task managers, timers, alarm. 
 */

function backDated(date)
{
    let presentDate=new Date();
    let time=new Date(date);
    if(time<presentDate)
    {
        console.log("backdated");
    }else{
        console.log("not backdated");
    }
}
backDated( "Aug 01 2025");