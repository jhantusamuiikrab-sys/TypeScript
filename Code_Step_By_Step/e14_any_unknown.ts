
// If every time value + datatype is change then we have to declare it every time and insted of this we can use *any* datatype
// let temp: string | number | object = "Jhantu";
// temp = 34;
// temp = { name: "Jhantu" };
// console.log(temp);

// Unknown data type is similar to Any but is's safer because it forces type checking before performing operations on value

let value: unknown = "Jhantu";
value = "Samui"
// value = 34 ;
// value = {};


// console.log(value.toLowercase())

if(typeof value === "string"){
    console.log(value.toUpperCase())
}



