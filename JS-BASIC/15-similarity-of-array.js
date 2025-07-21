var obj1 = {a:1,b:2};
var obj2 = {a:1,b:2};

var arr1 = [1,2,3];
var arr2 = [1,2,3];

var ip1 = 6;
var ip2 = 6;

// console.log(ip1 == ip2);

console.log(obj1 == obj2);
console.log(arr1 == arr2);
console.log(arr1 == arr1);

//OUTPUT:
// false
// false
// true

//WHY obj1 not equal to obj2?
// even the element in the object are similar but they are stored in the different memory location 