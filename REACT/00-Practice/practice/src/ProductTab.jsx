// import React from "react";
// import Product from "./Product";
// // import './App.css '
// function ProductTab()
// {
//     let option =["hi-tech" ,"durable"]
//     return (
//         <>
//         <Product title="Phone" description="This is latest model phone" price={30000} feature={option}/>
//         <Product title="Laptop" description="This is latest model Laptop" price={789722}/>
//         <Product title="Pen" description="This is latest model Pen" price={3}/>
//         </>
//     )
// }
// export default ProductTab;

import Product from './Product.jsx';
function ProductTab()
{
    let option =["hitech","durable","handy"];
 return(
     <>
         <Product  title="book" price={20} feature={option}  />
         <Product  title="Laptop" price={60000} feature={option}  />
         <Product title="Phone" price={30000} feature={option}/>
   </>
 );

}
export default ProductTab;
