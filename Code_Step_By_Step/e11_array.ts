// An Array is a zero-indexed, ordered collection of values.


// TypeScript Array DataType - 1. Collection of same data type 2. Predefined Data type not user defined


let numbers:number[]=[1,2,3,4,5]
let names:Array<string>=["Alice","Bob","Charlie"];
numbers.push(6);
console.log(numbers)


// IF we want to read only an array
let city:ReadonlyArray<string>=["Howrah","Kolkata"];
// city.push("Mumbai");
console.log(city)