// let arr = [1, [2, [3, [4, 5]]]];
// // how to flat this array
// function fat(arr) {
//     let array = [];
//     for (let i = 0; i < this.length; i++) {
//        ///write some code
//     }
// }
// console.log(fat());

// how to find time of code run 
// console.time('loop');
// for(let i=0;i<1000000;i++){}
// console.timeEnd('loop');


// q3 How to measure performance in JS?

// const t0 = performance.now();
// for(let i=0;i<100000;i++){}
// const t1 = performance.now();
// console.log(`Time: ${t1-t0} ms`);

// let a = performance.now();
// for(let i=0;i<100000;i++){}
// let b = performance.now();
// console.log(`${b-a} ms`);

// Q4 what is memory leak
// const leakyArray = [];
// function leak(){ leakyArray.push(new Array(1000).fill('*')); }
// leak()
// console.log(leakyArray);


// Q5 how to create an array in array method 
// let arr = new Array(10).fill(100);
// console.log(arr);


// Q6  How to detect memory leaks?
// let arr = []
// for(let i=0, len=arr.length;i<len;i++){}



// q7 debouncing and throdling in js 
// function debounce(fn, delay){
//   let timer;
//   return (...args)=>{
//     clearTimeout(timer);
//     timer=setTimeout(()=>fn(...args), 3000);
//   };
// }


// Q8 Minimizing reflows and repaints 

// let s = "a good    example"
// // Output: "example good a"

// var reverseWords = function(s) {
//     s = s.trim();
//     return s.split(/\s+/).reverse().join(" ")
//     //  return s.split(" ").reverse().join(" ");
// };
// console.log(reverseWords(s));



















