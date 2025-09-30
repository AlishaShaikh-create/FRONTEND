import axios from 'axios'
let url = "https://catfact.ninja/fact";

async function getFact() {
  try{
    let res = await axios.get(url);
    console.log(res);

  }
  catch(error)
  {
    console.log(error);
  }
     
}

getFact();