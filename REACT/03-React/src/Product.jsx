
function Product({title,price ,feature })
{
  let list=feature.map((ele)=>{
    return <li>{ele}</li>

  });
  
    return(
    
        <div>
             <h1>{title}</h1>
             <h3>Price: {price}</h3>
             <p>{list}</p>
             { price>30000 ? <p>"Discount of 5%"</p>:null}
            
        </div>
    )
}



export default Product;