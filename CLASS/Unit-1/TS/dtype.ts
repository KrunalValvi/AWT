let counter: number = 10;
console.log(counter);

let anotherBin: number = 0B010;
console.log(anotherBin);

let octal: number = 0o10;
console.log(octal);

let hexadecimal: number = 0XA;
console.log(hexadecimal);

// let big: bigint = 9007199254740991n;
// console.log(big);

let msg:string = "hello world";
console.log(msg);

let vote:boolean = false;
console.log(vote);

let person:{
    fname:string,
    lname:string,
    age:number
}={
    fname:"kajal",
    lname:"tanchak",
    age:20
}
console.log(person);

let fruits:string[] = ["apple","mango","chickoo"];
console.log(fruits);

let hobby:[string,number,boolean,string] = ["travelling",2,true,"cooking"];
console.log(hobby);

enum Colors{green, red,yellow} let Color = Colors.green;
console.log(Colors.green);

 let a:null = null;
console.log(a);

let b:undefined;
console.log(b);

let c:unknown = "abc";
console.log(c);

let d:any = 25;
console.log(d);

let sym1 = Symbol();
let sym2 = Symbol('descript');
let sym3 = Symbol('descript');
console.log(sym2 === sym3);

function add(a:number,b:number):number{
    return(a+b);
}
let xy = add(2,3);
console.log(xy);

//union
let id: number | string | boolean;
id = 101;
id = true;
id = "Abc";
console.log(id);

//intersection
type Person = { name: string };
type Employee = { id: number };
let emp: Person & Employee = { name: "Kajal", id: 1 };
console.log(emp);

//literal type
let direction: "up" | "down" | "left" | "right";
direction = "up";  
console.log(direction);