/*
1. What is Tuple Data type
=> Touple is fixed length, Ordered collection of different type, each element in a touple has a specific type
2. Tuple VS Array
=> Heterogeneous(Different type element) & Homogeneous(Same type element), Fined length & Dynamic length, 
3. Example
=> const temp1:[number, string, boolean]=[12,"Jhantu","true"]
4. Where we can use it
=> Where heterogeneous data is need.
5. Interview Questions
=> In Tuple for every datatype we store value but without specifying datatype we can't store value that's why length is fixed but if we push data to the Touple then it don't show any error and it will easily store to the tuple
*/

const temp1:readonly [number, string, boolean] = [12, "Jhantu", true];
// temp1.push("Samui");
console.log(temp1);
