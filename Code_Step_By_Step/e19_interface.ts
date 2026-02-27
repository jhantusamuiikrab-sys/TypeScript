// What is Interface ?
// => An interface is a way by which we can define a structure of an object, function etc. We can reuse and extend interface by defining one time.
// Define Interface ? here step by step comment and uncomment the step
//1st we simpley define datatype of an object
// const studentObj: {
//   name: string;
//   age: number;
//   sch: string;
// } = {
//   name: "Jhantu",
//   age: 25,
//   sch: "xyz",
// };
//2nd move the verable defination to the top with interface keyword
interface info {
  name: string;
  age: number;
  sch: string;
}
interface teacher extends info {
  subject: string;
}
const studentObj: info = {
  name: "Jhantu",
  age: 25,
  sch: "xyz",
};
const teacherObj: teacher = {
  name: "Abishek",
  age: 35,
  sch: "abc",
  subject: "english",
};
const managementObj: info = {
  name: "Sandeep",
  age: 50,
  sch: "pqr",
};
// How to use Interface ?
// Extend Interface
console.log(teacherObj);
