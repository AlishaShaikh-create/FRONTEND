import React from 'react'

function Product({title,description,price,option})
{
    
    return(
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>{price}</h3>
          <h3>{option}</h3>
        </>
    )
}

export default Product;