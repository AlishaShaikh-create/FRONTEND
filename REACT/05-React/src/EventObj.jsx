function handleClick(event)
{
    console.log("hello");
    console.log(event);
}

function EventObj()
{
    return (
        <>
        <button onClick={handleClick}> Click me</button>
        </>
    )
}

export default EventObj;