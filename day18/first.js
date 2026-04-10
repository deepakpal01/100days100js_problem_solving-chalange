// find the peak element in an array using bineary search 

// let  arr= [1,2,1,3,5,6,4]
// Output: 5
// Explanation: 6 is a peak element (another peak is 2)
// function findPeakElement(arr){
//     let st=0;
//     let end=arr.length -1;
//     while(st<=end){
//         let mid = Math.floor((st+end)/2);
//         if(arr[mid]<arr[mid-1]){
//             st = mid + 1;
//         }else {
//            end = mid;
//         }
//     }
//     return st;
// }
// console.log(findPeakElement(arr));