// class Car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }
// let obj = new Car("Ford",2020);
// console.log(obj.name + " " + obj.year);
var Car = /** @class */ (function () {
    function Car(name, year) {
        this.name = name;
        this.year = year;
    }
    Car.prototype.display = function () {
        console.log(this.name + " " + this.year);
    };
    return Car;
}());
var obj = new Car("Ford", 2020);
obj.display();
