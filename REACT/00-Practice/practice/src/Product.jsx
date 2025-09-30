import React from 'react'

function Product({title,description,price,feature})
{
   let  list= feature.map((ele)=>
    <li> {ele}</li>)
    return(
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>{price}</h3>
         <ul>{list}</ul>
        </>
    )
}

export default Product;