import Product from './Product.jsx';

function ProductTab()
{
    let option =["hitech","durable","handy"];
 return(
     <>
   <Product  title="book" price={20} feature={option}  />

   {/** here the price is number and operation can be performed on this number */}
  <Product title="Phone" price={30000*2} feature={option}/>
   
   {/** here the price is in string and operation cannot be performed the string*/}
  {/* <Product title="Laptop" price="60k"/> */}

   {/** here we haven't gave any price do by default it will take it form the price which we have assign value to 1 in product.jsx file*/}
   {/* <Product title="Pen" price="10" /> */}
   </>
 );
  
 
}
export default ProductTab;