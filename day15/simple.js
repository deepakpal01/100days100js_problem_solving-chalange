// user se input lena for browser
// let num = prompt(parent("enter any number:"));
// console.log(num);


// user se input lena in node js
const fs = require("fs");

let input = fs.readFileSync(0, "utf-8").trim();
console.log(input);