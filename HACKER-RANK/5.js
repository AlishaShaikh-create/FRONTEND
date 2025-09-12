//https://www.hackerrank.com/challenges/js10-let-and-const/problem?isFullScreen=true
const PI=Math.PI;
function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    // var readLine=require('readline-sync');
    var r=parseFloat(readLine())
    // Print the area of the circle:
    let area=PI*r*r;
    console.log(area);
    // Print the perimeter of the circle:
    let perimeter=2*PI*r;
    console.log(perimeter);
}
main();