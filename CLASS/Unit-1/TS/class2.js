"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name1, age1, salary1) {
        this.name1 = name1;
        this.age1 = age1;
        this.salary1 = salary1;
    }
    Employee.prototype.showdetails = function () {
        console.log("".concat(this.name1, " ").concat(this.salary1));
    };
    return Employee;
}());
var e2 = new Employee("Krunal", 200, 3000);
console.log(e2.name1);
e2.showdetails();
