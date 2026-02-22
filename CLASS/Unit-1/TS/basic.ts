let message:string = "new world";
console.log(message);

let x: number = 100,                                                                                                  
    y: number = 200;
let sum: number = x + y;

console.log("Sum: " + sum);


let bin = 0b100;
let oct = 0o144;
let hex = 0x64;
console.log(bin);
console.log(oct);
console.log(hex);


let description = `This TypeScript string can 
span multiple 
lines
`;
console.log(description);

// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(notPending); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError; 
console.log(result); // false

// OR operator
let result2 = completed || hasError; 
console.log(result2); // true

