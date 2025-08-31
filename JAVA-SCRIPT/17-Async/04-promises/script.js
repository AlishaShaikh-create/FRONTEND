//lets create a function that stores data in the database ,it actually do not store the data

function storeData()
{
    // if the internet speed is high then the data gets stored;
    //lets create a random function that stores the data
     let data=10;
    let internetspeed=Math.floor(Math.random()*10)+1;
    console.log(internetspeed);
    if(internetspeed>4)
    {
         console.log("data got stored:",data);
    }
     else{
        console.log("data was not stored");
     }
   
    
}
storeData();