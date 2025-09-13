
function Product({title,price ,feature })
{
  let list=feature.map((ele)=>{
    return <li>{ele}</li>
  });
    return(

        <div>
             <h1>{title}</h1>
             <h3>The price of the product is {price}</h3>
             <p>{list}</p>
            
        </div>
    )
}



export default Product;