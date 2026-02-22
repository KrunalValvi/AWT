interface Animal{
    sound():void;

}

class Cat implements Animal{
    sound(): void {
        console.log("Meow Meow");
    }
}

let c1 = new Cat();
c1.sound();