// print all factor
// function factor(num){
//     let arr =[];
//     let loopcount = 0
//     for(let i = 1;i<=num/2;i++){
//         loopcount++
//         if(num % i === 0){
//             arr.push(i);
//         }
//     }
//     console.log("loopCount",loopcount);
    
//     return (arr);
// }
// let num = 24;
// console.log(factor(num));


// find the all multipuls 
// function findmul(num,multi){
//     let arr = [];
//     if(num>multi) return `${num}is samller`;
//     for(let i = 1;i<=multi;i++){
//         if(num*i<=multi){
//             arr.push(num*i)
//         }
//     }
//     return arr;
// }
// console.log(findmul(4,31));


// hcf in js
// function hcf(a,b){
//     let rem;
//    let  count;
//     while(b!==0){
//         count++;
//          rem = a%b;
//         a = b;
//         b= rem;
//     }
//     return a;
// }
// console.log(hcf(12,80));


// concat and ...spread opreater
// let a = [1,2,3];
// let b = [3,4,5];
// let c = a.concat(b);
// let d = [...a,...b]
// console.log(d);
// console.log(c);


// string convert into array

// let str = "hello";
// let arr =Array.from(str);
// console.log(arr);

// // let s =arr.join("");
// // console.log(s);

// console.log(arr.toString(""));
