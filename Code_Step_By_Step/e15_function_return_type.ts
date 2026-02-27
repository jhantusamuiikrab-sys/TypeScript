//************************************************************************************************************************************************** */
// function fruits(): number {
//   return 10;
// }

//************************************************************************************************************************************************** */
// if a function doesn't return anything that mean the type of the function is void
// Here Bellow function is showing like 'addition' is declared but its value is never read.
// function addition(){

// }
//************************************************************************************************************************************************** */
// function simple(): boolean {
//   return true;
// }

//************************************************************************************************************************************************** */
// function complex(): number | string {
//   let data = 10;
//   let name = "anil sidhu";
//   let type = "age";
//   if (type == "age") {
//     return data;
//   } else {
//     return name;
//   }
// }
// const data = complex();
// console.log(data);

//************************************************************************************************************************************************** */
// Bellow is the JavaScript function that showing error => parameter 'a' implicitly has an 'any' type.
// function sum(a,b){
//   return a+b
// }

// const data = sum(1,2)
// console.log(data)

//************************************************************************************************************************************************** */
// Bellow is the typescript code where I define type of the parameter and type of the function return
// function sum(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum(1, 2));
// console.log(sum("1", 2)); // Here in TypeScript showing error => Argument of type 'string' is not assignable to parameter of type 'number' . But in JavaScript it print like 12.

//************************************************************************************************************************************************** */
// If we don't know what will be the return type then we can use any or unknown (here difference will come )
// Here we can use any or unknown
// function abc(){
//   return
// }
// abc();
//**************************************************************************************************************************************************