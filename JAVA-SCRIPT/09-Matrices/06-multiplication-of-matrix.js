import recreateInputMatrix from "./03-recreate-input-matrix.js";
function multiplication()
{
    let matrixA=recreateInputMatrix();
    let matrixB=recreateInputMatrix();
    if(matrixA[0].length==matrixB.length)
    {
        let multiply=new Array(matrixA.length);
        for(let i=0;i<matrixA.length;i++)
        {
            multiply[i]=new Array(matrixB[0].length).fill(0);
        }

        // console.log(multiply)    
        for(let i=0;i<matrixA.length;i++)
        {
            for(let j=0;j<matrixB[0].length;j++)
            {
                for(let k=0;k<matrixA[0].length;k++)
                {
                    multiply[i][j]+=matrixA[i][k]*matrixB[k][j];
                }
            }
        }
        
        console.log(multiply);
    }else{
        console.log("multiplication is not possible");
    }
}
multiplication();


