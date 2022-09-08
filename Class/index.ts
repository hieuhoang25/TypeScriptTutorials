////-----Class
//public 
class Car{
    name: string;
    year:number
    constructor(name:string, year:number){
        this.name = name;
        this.year = year;
    }
}
//
let car1 = new Car("Audi",2021);
car1.name = "Mercedes"
let car2 : Car ;
car2.name = "hello";
car2.year =10;

//private
class Car1{
    name: string;
   private  year:number
    constructor(name:string, year:number){
        this.name = name;
        this.year = year;
    }
}
let car3 = new Car1("Audi",2021);
car3.name = "Mercedes"
// car3.year =10; //error
//readonly
class Car3{
    readonly id:number
    name: string;
   private  year:number
    constructor(name:string, year:number){
        this.name = name;
        this.year = year;
    }
}
//
let car4 = new Car3("Audi",2021);
// car4.id = 1;//error
//short version

class Color {
    constructor(public name: string, private date: string, readonly id?:1) {
        
    }
}
let color1 = new Color("Audi","2021");
// color1.id = 1;//errror