// find the maximum number in 3 numbers
// function max(a,b,c){
//     if(a>b && b>c){
//         return `${a}is grater`;
//     }else if(b>a && a>c){
//         return `${b} is grater`
//     }else{
//         return "c is greater";
//     }
// }
// console.log(max(12,11,32));


// q2 how to check the number is positive or negative or zero
// function numCheck(num){
//     if(num>0){
//         return "number is positive";
//     }
//     else if(number<0){
//         return "number is negative";
//     }else{
//         return "number is zero";
//     }
// }
// console.log(numCheck(3));


// Q3 how to check the bill in rechess as pr unit
// 0-100 = 5 reches
// 101-200  = 7 rechess
// 201 -300 =10  rechess
// 300 more = 12 rechess

// let input = 500;
// let bill = 0;
// function unitspand(input) {
//     if (input <= 100) {
//         bill = input * 5;
//     } else if (input <= 200) {
//         bill = 100 * 5 + (input - 100) * 7;
//     } else if (input <= 300) {
//         bill = 100 * 5 + 200 * 7 + (input - 200) * 10;
//     } else {
//         bill = 100 * 5 + 200 * 7 + 300 * 10 + (input - 300) * 12;
//     }
//     return bill;
// }
// console.log(unitspand(input));


// Q4 Age < 10 → ₹50
// Age 10–18 → ₹100
// Age 19–60 → ₹150
// Age > 60 → ₹80
// 👉 Input: age → Output: ticket price
// function rate(age){
//     if(age<=10){
//         return "price is 50";
//     }
//     else if(age<=18 && age >10){
//         return "price is 100"
//     }else if(age>19 && age<60){
//         return "price is 150";
//     }else if(age<0){
//         return"plz enter valid age"
//     }
//     else{
//         return "ticket is 80 reches"
//     }
// }
// console.log(rate(18));


// Q5 Distance ≤ 5 km → ₹10/km
// 6–15 km → ₹8/km
// above 15 km → ₹5/km
// 👉 Input: distance → Output
// let price =0 ;
// function Busfare(km){
//     if(km<=5){
//         return price =km*10;
//     }
//     else if(km<=15 ){
//         return price = 5*10 + (km-5)*8;
//     }else{
//         return price = 5*10 + 15*8+(km-15)*5;
//     }

// }
// console.log(Busfare(20));


// Q6Recharge < ₹100 → no bonus
// ₹100–₹200 → 10% bonus
// ₹200–₹500 → 20% bonus
// ₹500 → 30% bonus
// let total = 0;
// function rch(rech){
//     if(rech<=100){
//         total = rech;
//     }else if(rech<=200 && rech >100){
//         total = 200 - (200 /10);
//     }else if(rech<=500 && rech>200){
//         total = 500 - (500/30);
//     }
//     return total;
// }
// console.log(rch(200));


// Q7 Water Bill:
// 0–50 L → ₹2/L
// 51–100 L → ₹3/L
// 101–200 L → ₹5/L
// above 200 L → ₹8/L
// 👉 Input: liters used → Output: total water bill
// let total = 0;
// function water(bill){
//     if(bill<=50){
//         total = bill *2;
//     }else if(bill > 50 && bill <= 100){
//         total = 50 *2 + (bill - 50)*3;
//     }else if(bill<=200 && bill >100) {
//         total = 50*2 + 100*3 +(bill-200)*5
//     }else{
//         total = 50*2 + 100*3 + 200*5 + (bill- 200)*8;
//     }
//     return total;
// }
// console.log(water(2000));

// Q8 how to find char is vowel or not 
// let char = "e";
// let arr = ["a", "e", "i", "o", "u"];
// function check(char) {
//     for (let i of arr) {
//            if (char === i) {  // yahan arr[i] nahi, bas i use karo
//             return "vowel";
//         }
//     }
//     return "consunent";
// }
// console.log(check(char));

// Q9 how to find this year is leap or not 
// function leap(year){
//     if(year%400 == 0 || year%4 ==0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(leap());
