const saying=new Map();

// map is basically key value collection which is used to store the element .It is silimar to that of object.

saying.set("cat" ,"Meaw");
console.log(saying);
//OUTPUT:
////Map(1) { 'cat' => 'Meaw' }

saying.set("dog","bhao");
console.log(saying);
//OUTPUT:
// Map(2) { 'cat' => 'Meaw', 'dog' => 'bhao' }

saying.set("elephant", "toot");

//To know the size of the map 
console.log(saying.size);

//TO get the value of the particular sting:
console.log(saying.get("cat"));
//OUTPUT:
//meow

console.log(saying.get("bird"));
//OUTPUT:
//undefined
//because the bird is not defined

//To know if a particular element is present or not 
//return true if present else return false
console.log(saying.has("cat"));
//OUTPUT:
//true


//to delete a particular pair in the map
saying.delete("cat");
console.log(saying);
//OUTPUT:
//Map(2) { 'dog' => 'bhao', 'elephant' => 'toot' }

//TO loop through the map
for(const [key,value] of saying)
{
    console.log(`${key} and ${value}`);
}

//OUTPUT:
//dog and bhao
//elephant and toot

saying.clear();
console.log(saying);
//OUTPUT:
//Map(0) {}