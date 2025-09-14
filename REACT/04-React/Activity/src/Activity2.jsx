import './Activity2.css';

function Activity2({title,description,oldPrice,newPrice})
{
    // let col={backgroundColor:"yellow"}

 return(
    <div className="outerContainer">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='PriceSection'>
             <span className='oldPrice'>{oldPrice} </span>
       
            <span className='newPrice'>{newPrice}</span>
        </div>
       
      </div>
    </div>
 )
}

export default Activity2;