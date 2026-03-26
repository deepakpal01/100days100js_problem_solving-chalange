// selection sort
function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let min = i;
        for(let j = i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min = j;
            }
        }
        let temp = arr[min];
            arr[min]=arr[i];
            arr[i]=temp;
    }
    return arr;
}
console.log(selectionSort([4,2,1,3,5]))
