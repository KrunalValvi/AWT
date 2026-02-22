// import { Collection } from "mongoose";

class Employee{
    public name1:string;
    private age1:number;
    protected salary1:number;

    constructor(name1:string, age1:number, salary1:number){
        this.name1=name1;
        this.age1=age1;
        this.salary1=salary1;
    }
    showdetails(){
        console.log(`${this.name1} ${this.salary1}`);
    }


}

let e2 = new Employee("Krunal",200,3000);
console.log(e2.name1);

e2.showdetails();
