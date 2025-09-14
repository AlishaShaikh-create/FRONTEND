function onsubmit()
{
    console.log("form was submitted")
}

function FormSubmit()
{
    return (
        <>
        <form>
            <input type="text" placeholder="Enter the name" />
            <button onClick={onsubmit}>Submit</button>
        </form>
        </>
        
    )
}

export default FormSubmit;