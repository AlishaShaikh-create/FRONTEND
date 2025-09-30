import React from "react";
import Product from "./Product";
// import './App.css '
function ProductTab()
{
    let option =["hi-tech" ,"durable"]
    return (
        <>
        <Product title="Phone" description="This is latest model phone" price={30000} option={option}/>
        <Product title="Laptop" description="This is latest model Laptop" price={789722}/>
        <Product title="Pen" description="This is latest model Pen" price={3}/>
        </>
    )
}
export default ProductTab;