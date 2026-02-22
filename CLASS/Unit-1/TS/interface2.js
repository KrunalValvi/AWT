var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.sound = function () {
        console.log("Meow Meow");
    };
    return Cat;
}());
var c1 = new Cat();
c1.sound();
