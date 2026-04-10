// find the last occurance of an array using bineary search 
function bineary(arr,tar){
    let st =0;
    let end = arr.length-1;
    let ans;
    while(st<=end){
        let min = Math.floor((st+end)/2);
        if(arr[min]<=tar){
            ans = arr[min];
            st = min+1;
        }else{
            end = min-1;
        }
    }
    return ans;
}
console.log(bineary([2,4,6,8,10,12,14],11))

