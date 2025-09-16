 import { useState } from "react";
 function Counter()
{
    let [count,setCount]=useState(0);
    console.log("The counter is getting re-rendered")
    console.log("count ",count)
    
   let incCount=()=>{
    // console.log("inside the count function:",count)
    setCount((currCount)=>{
        return currCount+1
    })
    
        setCount((currCount)=>{
        return currCount+1
    })

    
   }

   return (
    <div>
        <h3> Count = {count}</h3>
        <button onClick={incCount}>Increase count</button>
    </div>
   )
}
export default Counter;