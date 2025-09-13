import './product.css'
function Product({title,price})
{
    console.log(title);
    return(

        <div>
             <h1>{title}</h1>
        <p>The price of the product is {price}</p>
        </div>
     

    )
}

export default Product;