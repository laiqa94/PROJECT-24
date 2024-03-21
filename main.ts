

// Equality and  Inequality Test
console.log("Equality test with strings", "Apple" === "Apple");

// Equality and Inequality Test
console.log("Inequality test with strings", ("Apple" as String) != "orange" );

//Test  using the lower case function
console.log("Lower Case function test:", "Hello".toLowerCase() === "hello");

// Numerical tests involving equality 
console.log("Equality test with number:",20 === 20);

//Numerical tests involving inequality
console.log("Inequality test with number:", (20 as number) != 34);

// greater than and less than
console.log("Greater than test:", 10 > 5);

// greater than or equal to
console.log("Greater than and equal to test:, 10 >= 10");

//less than or equal to
console.log("less than or equal to test:", 5 <= 10);

//Test using "and" operator
console.log("And operator test:", 5===5 && 10 > 5);

//Test using "or" operator
console.log("or operator test:", 5===5 || false);

//Test whether an item is in array
const fruits :string[] =["Naspati","Banana","Amrood"];
console.log('Test "Naspati"in the array:',fruits.includes("Naspati"));

//Test whether an item is not in a array
console.log('Testing "Apple" is not in array:', !fruits.includes('Apple'));