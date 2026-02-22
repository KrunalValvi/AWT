interface person{
    name2:string;
    salary2:number;
    empid:number;
    showdetail():void;
}

let P1:person = {
    name2:"Mayur",
    salary2:1,
    empid:102,
    showdetail():void{
        console.log(`${this.name2}`);
    }
}
console.log(P1.empid+" "+P1.name2+" "+P1.salary2);
P1.showdetail();