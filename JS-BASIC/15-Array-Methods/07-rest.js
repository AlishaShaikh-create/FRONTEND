//REST:
// allows a function to take an indefinite number of arguments and bundle them in an array
function print(...args){//args stands for argument here we can write anything
    for(let i=0;i<args.length;i++)
    {
        console.log("args = ",args[i]);
    }
}
print(1);

//what we have actually does is that we have took multiple argumets 
//generally we need to pass parameter and according to those parameter the arguments value will be printed

function printArgs(){
    console.log(arguments);//even the arguments is not defined it does  not give us any error
 
    //argument is besically an collection of object so we cannot perform push and pop function
};
printArgs(1,2,3);
//OUTPUT:
// [Arguments] { '0': 1, '1': 2, '2': 3 }

function minimumNumber(msg,...mini)
{
    console.log(msg);
    return mini.reduce((min,ele)=>{
        if(min>ele){
            return ele;
        }else{
            return min;
        }
    });
}
console.log(minimumNumber("hello",10,20,30,-1,40));
