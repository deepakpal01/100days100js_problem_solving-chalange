//Q1 Print Right-Angled Star Triangle
// Input: Rows = 5
// Output:
// *
// **
// ***
// ****
// *****

// const { log } = require("console");

// const { log } = require("console");

// const { log } = require("console");

// let row = 5;
// for (let i = 0; i < row; i++) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//         str = str + "*"
//     }
//     console.log(str);
// }


//Q2. Print Inverted Right-Angled Triangle
// Input: Rows = 5
// Output:
// *****
// ****
// ***
// **
// *

// let row = 5;
// for (let i = row; i >=0; i--) {
//     let str = "";
//     for (let j = 0; j <= i; j++) {
//         str = str + "*"
//     }
//     console.log(str);
// }

// Q3.Input: Rows = 5

// Output:
//     *
//    ***
//   *****
//  *******
// *********
// let rows = 5;

// Loop through each row
// for (let i = 1; i <= rows; i++) {
//   // Print spaces then stars
//   let spaces = ' '.repeat(rows - i);
//   let stars = '*'.repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

// for (let i = 0; i <rows; i++) {
//   // Print spaces then stars
//     let space = " " .repeat(rows - i -1)
//   let stars = '*'.repeat( 2*i +1);
//   console.log(space + stars);
// }


// Q4 print this pettern
// *********
//  *******
//   *****
//    ***
//     *

// let num = 5;
// for(let i = num;i>=0;i--){
//     let star = "*".repeat(2*i+1)
//     // let space = " ".repeat(num-i-1);
//     console.log(star);

// }


// let n = 5;
// for (let h = 0; h < n; h++) {
//     // for(let j=0;j<n-h-1;j++){
//     let space = (" ").repeat(n - h - 1)
    // }
    // for(let j=0;j<h+1;j++){
//     let star = ("*").repeat(h + 1)
//     // }
//     console.log(space + star);
    
// }
// for(let k = n -1 ; k>=0;k--){
//         let space = (" ").repeat(n - k )
//     let star = ("*").repeat(k)
//     console.log(space + star);
// }

// // let  n = 5;
// for(let i=0;i<5;i++){
//     let sp = (" ").repeat(n-i+1);
//     let st = ("*").repeat(i+1);
//     console.log(st+sp);
// }
// for(let j=n-1;j>0;j--){
//     let sp = (" ").repeat(n-j);
//     let st = ("*").repeat(j);
//     console.log(st+sp);
// }


// how to add obj in variable and DataTransferItemList
// const data = new Object();
// console.log(data);
// data.name = "daapka"
// console.log(data);
// delete data.name
// console.log(data);

// const data = { name: "deepak", age: 22 };
// const { name, ...newData } = data;
// Object.assign(data, newData);  // data ko newData ke equal kar diya
// console.log(data); // { age: 22 }


// const deta = new Object();
// deta.name = "deepak";
// deta.age = 22;
// console.log(deta);
// // how to access the value of deta 
// console.log(deta.name);
// console.log(deta[`age`]);

// const obj = {name: 'Vikas'};
// // delete obj.name;
// // Vika
// Object.seal(obj);
// obj.name = 'Test';
// // Object.freeze(obj);
// console.log(obj.name);
// Object.freeze(obj);
// obj.name = 'Te';
// console.log(obj);

// const obj = {
//     fname : "deepak",
//     city : {
//         car :"volvo",
//     }
// }
// Object.freeze(obj);
// // console.log(obj.city.car);
// obj.city.car = "farari";
// console.log(obj.city.car);

// console.log(obj);
// console.log(Object.entries(obj));


// convert into user name 
// let userName = `@${name1.toLowerCase()}+" "+ ${name1.length()} `
// console.log(userName);
// let name1  =  prompt("enter your name plz:");
// let word  =  prompt("enter word");
// let count = 0 ;
// for(let key in name1){
//    if(name1[key].toLowerCase()==word.toLowerCase()){
//     console.log("index of char " ,key);
//     count++;
//    }
// }
// console.log("count",count);

// let word = prompt("enter any str :")
// // word = word.split("");
// console.log(word.length);


// console.log("deepak");
// class Deepak{
// //   add(a, b) {
// //       return a + b; // when 2 arguments
// //     }
//   add(a,b,c){
//     return a+b+c
//   }
// }

// const dee = new Deepak();

// // console.log(dee.add(2, 3));    // 👉 5
// console.log(dee.add(2, 3, 4)); 


let obj = [
    {first : "deepak",last:"kumar"},
    {first : "akash",last:"pal2"},
    {first : "gungun",last:"kumar"},
]
let arr = obj.filter((item)=>{
    return item.last == "kumar"
})
// console.log(arr);
let res = arr.filter
