// In the intersection we combine 2 datatype but in union we choose one between 2 datatype
type PersonTypeA = { name: string };
type PersonTypeB = { age: number };
type PersonTypeC = PersonTypeA & PersonTypeB; // In this way we can combine 2 datatype
var PersonData1: PersonTypeA = { name: "user1" };
var PersonData2: PersonTypeB = { age: 26 };
var PersonData3: PersonTypeC = { name: "user2", age: 23 };
