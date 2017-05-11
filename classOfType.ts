class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet() {
        return "hello, " + this.greeting;
    }
}
let greeter = new Greeter("kunt");
console.log( greeter.greet() );
console.log( greeter );

//继承
class Animal {
    name: string;
    constructor(theName: string){ this.name = theName; }
    move( distanceInMeters: number = 0 ){
        console.log( `${this.name} moved ${distanceInMeters}m.` );
    }
}
class Snake extends Animal {
    constructor(name: string) {super(name);}
    move( distanceInMeters = 5 ){
        console.log("爬行…………………………");
        super.move( distanceInMeters );
    }
}
class Horse extends Animal {
    constructor(name: string){ super(name); }
    move( distanceInMeters = 90 ){
        console.log("奔跑……………………");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
sam.move(234);
tom.move(345);

//public
class animal {
    public name: string;
    public constructor(theName: string){ this.name = theName; }
    public move( distanceInMeters: number ){
        console.log( `${this.name} moved ${distanceInMeters}m.` );
    }
}
//private
class animal1{
    private name: string;
    constructor( theName: string ){ this.name = theName; }
}

new animal("cat").name;

//protected
class Person {
    protected name: string;
    constructor(name: string){ this.name = name; }
}
class Employee extends Person {
    private department: string;
    constructor(name: string, department: string){
        super(name)
        this.department = department;
    }
    public getElevatorPitch(){
        return `hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Kunt","NASA");
console.log(howard.getElevatorPitch());
console.log(howard);

//readonly
class Octopus {
    readonly name: string;
    readonly numberOfLegs:number = 8;
    constructor( theName: string){
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";  error
/*let dad = new Octopus();
dad.name = "Man with the 3-piece suit";*///error
console.log(dad);
//抽象类
abstract class Animall {
    abstract makeSound(): void;
    move(): void {
        console.log('正在初始化数据……………………');
    }
}
//构造函数
class Greeter2 {
    greeing: string;
    constructor(message: string) {
        this.greeing = message;
    }
    greet() {
        return "hello, " + this.greeing;
    }
}
// let greeter2: Greeter2;  right
let greeter2 = new Greeter2("kunt");
console.log(greeter2.greet());
