let url = "https://catfact.ninja/fact"
async function cat()
{
    try{
let res=await fetch(url);
    let data =await res.json();
    console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
    
}

cat();