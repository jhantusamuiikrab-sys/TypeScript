// What is data type ?
// ==>  In a veriable what type of data will store that is data type.
var userName = "Jhantu";
var age = 23;
var isAuthenticated = true;
// Categories of data type in TypeScript
// 1. Primitive 2. Object 3. Special Types 4. Advance Types 5.Function Types
// Primitive data types ==> 1.number 2.string 3.boolean 4.null 5.undefined 6.bigint 7.symbol
// is null or undefined same ?
// Null means there is nothing in that veriable totally empty
// Undefined means till now no value is assigned means uninitilized value in future value can be assigned
var demo = undefined; // like this way we can use multiple data type for a single veriable
var temp = null;
console.log(demo);
demo = "not defined";
// When number is big then we use bigint
//Symbol always generate a unique identifier or we can say address 
// const syml1 = Symbol('user-id');
// const syml2 = Symbol('user-id');
// console.log(syml1 === syml2);
console.log(demo);
export {};
