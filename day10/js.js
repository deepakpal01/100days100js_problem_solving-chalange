/// bubble sort  ki help se two array ko sort krna 
let arr1 = [6,3,2];
let arr2 = [5,4,1];
let res = [...arr1 ,...arr2];
let n=res.length;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(res[j]>res[j+1]){
            [res[j],res[j+1]]=[res[j+1],res[j]];
        }
    }
}

console.log(res);