// bubble sort 
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let isSort =false;
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
                isSort =true;
            }
        }
        if(!isSort){
            return arr;
        }
    }
    return arr;
}
console.log(bubbleSort([1,2,3,4]));
