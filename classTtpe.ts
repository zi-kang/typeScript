interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock( ctor: ClockConstructor, hour: number, minute: number ): ClockInterface {
    return new ctor(hour, minute);
}

class DiitalClock implements ClockInterface {
    constructor(h: number, m: number){ }
    tick(){
        console.log("hello world!");
    }
}

class AnaogClock implements ClockInterface {
    constructor(h: number, m: number){ }
    tick() {
        console.log("tick hello to yous!");
    }
}

let digitaal = createClock( DiitalClock, 12, 17 );
let analog = createClock( AnaogClock, 7, 32 );

interface shap {
    color: string;
    height:number;
}
interface Square extends shap{
    width: number;
}

let square = <Square>{};
square.color = "blue";
square.height = 10;
square.width = 10;
console.log( square.height * square.width );



interface PenStroke {
    penWidth: number;
}
interface Squr extends shap, PenStroke{
    sideLength: number;
}
let squr = <Squr>{};
squr.color = "red";
squr.sideLength = 10;
squr.penWidth= 15;
console.log( squr );
//混合类型实例
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number){ };
    counter.interval = 321;
    counter.reset = function(){
        console.log("I'm counter's reset function!");
    }
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c);
console.log(c);

//类继承
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Buttons extends Control {
    select() { }
}

class TextBoxs extends Control {
    select() { }
}

class Images {
    select() { }
}

class Locations {
    select() { }
}