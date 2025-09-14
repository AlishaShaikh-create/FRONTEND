function Activity({username,color})
{
    let fontcolor={color}
    return(
        <div>
            <h1 style={fontcolor}>Your name is {username}</h1>
        </div>
    );
}
export default Activity;
