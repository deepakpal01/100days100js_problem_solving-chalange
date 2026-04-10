//find the first occrence in js using bineary search 
let arr= [2,4,4,4,9,11];
let target = 4;
function firstOcurrence(arr,target){
        let st=0;
        let end = arr.length -1;
        let ans=-1;
        while(st<=end){
            let mid=Math.floor((st+end)/2);
            if(arr[mid]==target){
                ans= mid;
                end=mid-1;
            }else if(arr[mid]>target){
                end=mid-1;
            }else{
                st=mid+1;
            }
        }
        return ans;
}
console.log(firstOcurrence(arr,target));
