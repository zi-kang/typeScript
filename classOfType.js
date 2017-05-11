var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("kunt");
console.log(greeter.greet());
console.log(greeter);
//继承
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("爬行…………………………");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 90; }
        console.log("奔跑……………………");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
sam.move(234);
tom.move(345);
//public
var animal = (function () {
    function animal(theName) {
        this.name = theName;
    }
    animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return animal;
}());
//private
var animal1 = (function () {
    function animal1(theName) {
        this.name = theName;
    }
    return animal1;
}());
new animal("cat").name;
//protected
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("Kunt", "NASA");
console.log(howard.getElevatorPitch());
console.log(howard);
//readonly
var Octopus = (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";  error
/*let dad = new Octopus();
dad.name = "Man with the 3-piece suit";*/ //error
console.log(dad);
//抽象类
var Animall = (function () {
    function Animall() {
    }
    Animall.prototype.move = function () {
        console.log('正在初始化数据……………………');
    };
    return Animall;
}());
//构造函数
var Greeter2 = (function () {
    function Greeter2(message) {
        this.greeing = message;
    }
    Greeter2.prototype.greet = function () {
        return "hello, " + this.greeing;
    };
    return Greeter2;
}());
// let greeter2: Greeter2;  right
var greeter2 = new Greeter2("kunt");
console.log(greeter2.greet());
