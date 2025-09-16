import LikeButton from './Activity1.jsx';
import './App.css'
import Counter from "./Counter.jsx";
import { useState } from 'react';
function App()
{
  //  let [count,setCount]=useState(0);
  //  let incCount=()=>{
  //   // count=count+1
  //   setCount(count+1); // this is not the right way of updating the value
  //   console.log(count);

  

  return (
    <>
    <h1> States in React</h1>
     {/* <LikeButton/> */}



    <Counter/>

    </>
  )
}
export default App;
