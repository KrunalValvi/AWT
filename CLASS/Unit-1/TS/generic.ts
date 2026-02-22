// function test<T>(value:T):T {
//     return value;
// }
// let num = test<number>(123);
// let namee = test<string>('prit');
// console.log(num);
// console.log(namee);



function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(10);
let str = identity<string>("Hello");

console.log(num);
console.log(str);

function printArray<T>(items: T[]): void {
    items.forEach(x=> console.log(x));
}

printArray<number>([1, 2, 3]);
printArray<string>(["A","B","C"]);

interface Box<T> {
    value: T;
}

let numberBox: Box<number> = { value: 100 };
let stringBox: Box<string> = {value: "Hello" };
console.log(numberBox.value);
console.log(stringBox.value);

class DataStore<T> {
    private data: T;
    constructor(value: T) {
    this.data = value;
}
getData(): T {
    return this.data;
}
}

let d1 = new DataStore<number>(50);
let d2 = new DataStore<string>("TypeScript");
console.log(d1.getData());
console.log(d2.getData());