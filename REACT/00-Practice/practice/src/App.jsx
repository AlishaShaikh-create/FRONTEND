import React from "react";
let name ="Alisha";
function Product()
{
  return(
    <>
    <h3>Product name</h3>
    <p>Description of the prodcut </p>
    </>
  )
}
function App()
{
  return(
    <>
      <Product/>
        <Product/>
      <Product/>

    </>
  )
}
export default App;
