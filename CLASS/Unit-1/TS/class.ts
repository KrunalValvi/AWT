    // class Car{
    //     constructor(name,year){
    //         this.name=name;
    //         this.year=year;

    //     }
    // }

    // let obj = new Car("Ford",2020);
    // console.log(obj.name + " " + obj.year);


        class Car{
            name:string;
            year:number;

        constructor(name:string,year:number){
            this.name=name;
            this.year=year;

        }

        display():void{
            console.log(this.name + " " + this.year);
        }
    }

    let obj = new Car("Ford",2020);
    obj.display();