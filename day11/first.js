// how to write code of insertion sort

// basic type of insertion in js

function insertion(arr){
    for(let i =1;i<arr.length ; i++){
        let current = i;
        let j =i-1;
        while(j>=0 && arr[j]>arr[j+1]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;
    }
    return arr;
}
console.log(insertion([5,4,2,1,3]))