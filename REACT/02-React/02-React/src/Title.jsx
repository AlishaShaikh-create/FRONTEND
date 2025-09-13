// export default Title; 
//The default is used to export the single file where the export is used to export the multiple file 

function Title()
{
  return <h1>Coding</h1>
}

function Number()
{
   return 5;
}

function Javascript()
{
    let name ="Alisha"
    return(
        <>
        <p> 2*2= {2*2}</p>
        <h1>HI {name.toUpperCase()}</h1>
        </>
    )
}


export {Title,Number,Javascript};