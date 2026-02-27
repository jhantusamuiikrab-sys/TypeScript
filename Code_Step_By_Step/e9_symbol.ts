// Symbol – Represents a unique and immutable value, often used as object keys.

const s1: symbol = Symbol("id"); // try to avoid symbol datatype in this way because this is more general rather then most specifie
const s2 = Symbol("id");
console.log(s1 === s2); // false

// usage example of Symbol data type with example

const secretKey = Symbol("token");

const user = {
  name: "John",
  [secretKey]: "12345-ABC", // This key is unique
};



// You cannot access it using a string
// console.log(user["token"]); // undefined
console.log(user[secretKey]); // "12345-ABC"

// Dry run of this code

// Step 1: Symbol Creation
// TypeScript

// const secretKey = Symbol("token");
// Action: The engine creates a new, unique primitive value in memory.

// Memory State: A unique ID (let's call it Sym(1)) is created.

// Note: The string "token" is just a description (label) for debugging. It has no functional power. Even if you create another Symbol("token"), it will be a different unique ID.

// Step 2: Object Initialization
// TypeScript

// const user = {
//   name: "John",
//   [secretKey]: "12345-ABC"
// };
// Action: An object is created with two properties.

// Property 1: A standard string key "name" pointing to "John".

// Property 2: A computed property. Instead of the string "secretKey", the engine evaluates the variable secretKey to get our unique ID Sym(1).

// Result: The object looks like this internally: { "name": "John", Sym(1): "12345-ABC" }.

// Step 3: Accessing by String
// TypeScript

// console.log(user["token"]); // undefined
// Action: You are asking the object: "Do you have a property with the string name 'token'?"

// Result: The object checks its keys. It has "name" and Sym(1). It does not have a string key called "token".

// Output: undefined.

// Step 4: Accessing by Symbol Reference
// TypeScript

// console.log(user[secretKey]); // "12345-ABC"
// Action: You are asking the object: "Give me the value associated with the unique ID stored in the variable secretKey."

// Result: The variable secretKey points to Sym(1). The object finds the key Sym(1) and returns its value.

// Output: "12345-ABC".





//            1. Primitive = immutable(can't change and create new one) = work with value
// data type -
//            2. Non-Primitive = mutable(update value) = work with referances
