// function test<T>(value:T):T {
//     return value;
// }
// let num = test<number>(123);
// let namee = test<string>('prit');
// console.log(num);
// console.log(namee);
function identity(value) {
    return value;
}
var num = identity(10);
var str = identity("Hello");
console.log(num);
console.log(str);
function printArray(items) {
    items.forEach(function (x) { return console.log(x); });
}
printArray([1, 2, 3]);
printArray(["A", "B", "C"]);
var numberBox = { value: 100 };
var stringBox = { value: "Hello" };
console.log(numberBox.value);
console.log(stringBox.value);
var DataStore = /** @class */ (function () {
    function DataStore(value) {
        this.data = value;
    }
    DataStore.prototype.getData = function () {
        return this.data;
    };
    return DataStore;
}());
var d1 = new DataStore(50);
var d2 = new DataStore("TypeScript");
console.log(d1.getData());
console.log(d2.getData());
