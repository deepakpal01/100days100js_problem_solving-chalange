//find the first occrence in js using bineary search 
// let arr= [2,4,4,4,9,11];
// let target = 4;
// function firstOcurrence(arr,target){
//         let st=0;
//         let end = arr.length -1;
//         let ans=-1;
//         while(st<=end){
//             let mid=Math.floor((st+end)/2);
//             if(arr[mid]==target){
//                 ans= mid;
//                 end=mid-1;
//             }else if(arr[mid]>target){
//                 end=mid-1;
//             }else{
//                 st=mid+1;
//             }
//         }
//         return ans;
// }
// console.log(firstOcurrence(arr,target));


// last occrence of an array using bineary search 
// let arr= [2,4,4,4,9,11];
// let target = 4;
// function lastOcurrence(arr,target){
//    let st=0;
//    let end=arr.length-1;
//    let last=-1;
//    while(st<=end){
//     let mid = Math.floor((st+end)/2);
//     if(arr[mid] == target){
//         last=mid;
//         st=mid+1;
//     }else if(arr[mid]>target){
//          end=mid-1;
//     }else{
//         end=mid-1;
//     }
//    }
// return last;
// }
// console.log(lastOcurrence(arr,target));

//







// find a target in decending order of bineary search 
// let arr = [100,80,60,40,20,10];

// let target =20;
// function findTarget(arr,target){
//     let st=0;
//     let end=arr.length -1;
//     while(st<=end){
//         let mid=Math.floor((st+end)/2);
//         if(arr[mid]==target){
//             return mid;
//         }else if(arr[mid]>target){
//             st=mid+1;
//         }else{
//             end=mid-1;
//         }
//     }
//     return -1;
// }
   
// console.log(findTarget(arr,target));

//find the occrence ka count 
// let arr = [1,2,2,2,3,4];
// let target = 2;
// let count = 0;
// // ans count = 3//
// function findOccrence(arr,target){
//     let st=0;
//     let end=arr.length-1;
//     let first=-1;
//     while(st<=end){
//         let mid = Math.floor((st+end)/2);
//         if(arr[mid]==target){
//             first=mid;
//             end=mid-1;
//         }else if(arr[mid]>target){
//             end= mid-1;
//         }else{
//             st=mid+1;
//         }
//     }
//     return first;
// }
// let first = findOccrence(arr,target);
// // console.log(first);
// function lastOccrence(arr,target){
//     let st=0;
//     let end=arr.length-1;
//     let last=-1;
//     while(st<=end){
//         let mid = Math.floor((st+end)/2);
//         if(arr[mid]==target){
//             last=mid;
//             st=mid+1;
//         }else if(arr[mid]>target){
//             end= mid-1;
//         }else{
//             st=mid+1;
//         }
//     }
//     return last;
// }
// let last = lastOccrence(arr,target);
// // console.log(last);
// count = last - first + 1;
// console.log(count);