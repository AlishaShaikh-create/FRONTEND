// import React from 'react'

// function Product({title,description,price,feature})
// {
//    let list = feature.map((ele)=>{
//     <li>{ele}</li>
//    })
    
//     return(
//         <>
//           <h1>{title}</h1>
//           <h3>{price}</h3>
//          <ul>{list}</ul>
//         </>
//     )
// }

// export default Product;

function Product({title,price ,feature })
{
  let list=feature.map((ele)=>{
    return <li>{ele}</li>

  });
  let discount=price>30000 ? "Discount of 5%":null
    return(
    
        <div>
             <h1>{title}</h1>
             <h3>Price: {price}</h3>
             <p>{list}</p>
             <p>{discount}</p>
            
        </div>
    )
}
export default Product;
