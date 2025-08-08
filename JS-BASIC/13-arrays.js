//OBJECTS IN JS
let student={
    name:"Alisha",
    rollNo:"22k91a05m0",
    dept:"CSE",
    year:"4th year",
};
//PRINTING OBJECTS 
console.log(student);

//ACCESSING THE ELEMENTS:
//we can assess the elements using dot operator
console.log(student.name,student.year);

//ARRAYS IN JS
//What is an array?
//ordered collection of elements

//CREATING AN ARRAY
let arr=new Array();
let array=[];

//we can even specify the size of the array
let newarray=new Array(2);
console.log("Length of the new array",newarray.length);
//OUTPUT:
//Length of the new array 2


//CREATING ELEMENTS IN THE ARRAY
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits);

//ACCESSING INDIVIDUAL ELEMENTS IN THE ARRAY
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


//STORING THE DIFFERENT ELEMENTS WITH DIFFERENT DATATYPES
//array can store elements with different datatypes 
let elements=['neha',1,true,'alisha'];
console.log(elements);
console.log(typeof(elements[2]));//boolean


let arrayEle = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

//ACCESSING THE ELEMENTS:
console.log(arrayEle[0])
console.log(arrayEle[1])
console.log(arrayEle[2])
console.log(arrayEle[3])
//OUTPUT:
// Apple
// { name: 'John' }
// true
// [Function (anonymous)]


//ACCESSING THE INDIVIDUAL ELEMENTS:
console.log(arrayEle[1].name);
//OUTPUT 
//John
console.log(arrayEle[3])
//OUTPUT:
//[Function (anonymous)]

//SYNTAX TO CALL FUNCTION WHICH IS DECLARED IN THE ARRAY:
arrayEle[3]()
//OUTPUT:
//hello



//REPLACING ELEMENTS OF THE ARRAY
fruits[2]="grapes";
console.log(fruits);//plum is replaced with grapes
//OUTPUT:
//[ 'Apple', 'Orange', 'grapes' ]


//ADDING NEW ELEMENTS:
fruits[3]="banana";
console.log(fruits);//at 3rd index banana is added
//OUTPUT:
//[ 'Apple', 'Orange', 'grapes', 'banana' ]

//FINDING LENGTH OF THE ARRAY:
//arrayname.length
console.log(fruits.length);
//OUTPUT
//4

//INDEXING IN JS 
//normally index value start with 0 
//NOTE:JS DOES NOT ALLOW NEGAVTIVE INDEXING CONCEPT 
//Although, in JavaScript it won’t work. The result will be undefined, because the index in square brackets is treated literally.
 let numbers=[10,20,30,40,50]
 console.log(numbers[-1]);
 console.log(numbers[-3]);
 //OUTPUT:
 //undefined
 //undefined

//We can explicitly calculate the last element index and then access it:
console.log(numbers[numbers.length-2])
//OUTPUT:
//-2


//ANOTHER SYNTAX FOR CALCULATING NEGATIVE INDEX
//the above code is more complex as we need to write "numbers " twice
console.log(numbers.at(-2));
console.log(numbers.at(-1));
console.log(numbers.at(-4));
//OUTPUT:
// 40
// 50
// 20