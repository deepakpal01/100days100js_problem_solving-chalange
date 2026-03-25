// // Q1 string me alphabate ka count btana kese btau
// let str = "how are you deepak";
// let st = {};
// let count =1;
//  function stringCount(){
//      str=str.replace(/\s/g, "").split("").sort();
//     //  for(let i of str){
//     //     obj
//     //  }
//         return  str
//  }
//  console.log(stringCount());



// let result = "hello my name is deepak"
//   .toLowerCase()
//   .replace(/[^a-z]/g, "")
//   .split("")
//   .sort();

// console.log(result);


// space ko kitne type se remove kr sakte h in string

// let obj = {};
// let str = "hello i am deepak".split("").sort();
// for(let i of str){
//     if(i!==" "){
//         if(obj[i]){
//             obj[i]++; 
//         }else{
//             obj[i]=1;
//         }
//     }
// }
// console.log(obj)

// Q2 how to flat an array in js
// using flat method
let arr = [1, [2, 3], [4, [5, 6]]];
// console.log(arr.flat(Infinity))


// using reduce method
// arr =arr.reduce((a,b)=>a.concat(b),[])
// console.log(arr);
arr =arr.toString().split(',').map(Number);
console.log(arr)