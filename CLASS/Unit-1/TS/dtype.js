var counter = 10;
console.log(counter);
var anotherBin = 2;
console.log(anotherBin);
var octal = 8;
console.log(octal);
var hexadecimal = 0XA;
console.log(hexadecimal);
// let big: bigint = 9007199254740991n;
// console.log(big);
var msg = "hello world";
console.log(msg);
var vote = false;
console.log(vote);
var person = {
    fname: "kajal",
    lname: "tanchak",
    age: 20
};
console.log(person);
var fruits = ["apple", "mango", "chickoo"];
console.log(fruits);
var hobby = ["travelling", 2, true, "cooking"];
console.log(hobby);
var Colors;
(function (Colors) {
    Colors[Colors["green"] = 0] = "green";
    Colors[Colors["red"] = 1] = "red";
    Colors[Colors["yellow"] = 2] = "yellow";
})(Colors || (Colors = {}));
var Color = Colors.green;
console.log(Colors.green);
