interface person{
    name2:string;
    salary2:number;
    empid:number;
    showdetail():void;
}

let p1:person = {
    name2:"Krunal",
    salary2:1,
    empid:102,
    showdetail():void{
        console.log(`${this.name2}`);
    }
}
console.log(p1.empid+" "+p1.name2+" "+p1.salary2);
p1.showdetail();