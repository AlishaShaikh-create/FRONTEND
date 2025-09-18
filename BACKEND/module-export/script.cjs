const math=require("./math.cjs");
console.log(math);

//Node 22 verison do not support the module.export 
// To use that functionality we can use the .cjs extension (common java Script)
console.log(math.sum);