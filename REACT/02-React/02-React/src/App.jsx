// Creating  our first component
// Component first letter should be capital
// We can return only single html element.
// It is good practice to write each component in the individual file does not matter how small or how big the component is

import './App.css'

import {Title,Number} from './Title.jsx'

// With div we can render multiple things or write multiple things
// Every component should be written in the seperate

function App() {
  return (
    // <div>
    //   <Title/>
    //   <Title/>
    //   <Title/>
    // </div>
    <>
      <Title/>
      <Title/>
     <Title/>
    </>

  )
}

export default App

