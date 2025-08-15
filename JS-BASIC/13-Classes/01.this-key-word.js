//this key word in javascript:

let student={
    name:"Alisha Shaikh",
    age:12,
    eng:95,
    math:93,
    phy:80,
    getAvg(){
        console.log(this);
        //OUTPUT:this object refer to the complete object 
//         {
//   name: 'Alisha Shaikh',
//   age: 12,
//   eng: 95,
//   math: 93,
//   phy: 80,
//   getAvg: [Function: getAvg]
// }
       let avg=(this.eng+this.math+this.phy)/3;
       console.log(avg);
       console.log(`${this.name} got average marks=${avg}`);
    }
}

student.getAvg();
//OUTPUT:
//ReferenceError: eng is not defined before writing this keyword in the in getAvg method

console.log(this);