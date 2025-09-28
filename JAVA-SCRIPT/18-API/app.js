let jsonRes = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

// this convert the json data to js object 
//parse method is used 

let validRes = JSON.parse(jsonRes)
console.log(validRes);


// JSON.stringify( json ) Method
// To parse a JS Object data into JSON

let student =
{
    name:"Alisha",
    marks:99
}

console.log(JSON.stringify(student));