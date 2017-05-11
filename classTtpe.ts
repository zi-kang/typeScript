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