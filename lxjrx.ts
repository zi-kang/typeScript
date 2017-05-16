interface Named {
    name: string;
}

class Person {
    name: string;
    num: number;
}

let p: Named;
console.log(p);//undeined
// OK, because of structural typing
p = new Person();
console.log(p);//Person


let x: Named;
let y = { name: 'Aice', location: 'Seattle' };
x = y;
console.log( x );

function greet( n: Named ){
    console.log( 'Hello, ' + n.name );
}
greet( y );

//煎蛋比较两个函数
let z = ( a: number ) => 0;
let t = ( b: number, s: string ) => 0;
// z = t; error
t = z; //OK


let items = [1, 2, 3];

// Don't force these extra arguments
items.forEach((item, index, array) => console.log(item));

// Should be OK!
items.forEach((item) => console.log(item));

//函数参数双向协变

enum EventType { Mouse, Keyboard }

interface Event { timestamp: number; }
interface MouseEvent extends Event { xx: number; yy: number }
interface KeyEvent extends Event { keyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
    console.log(111222333);
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.xx + ',' + e.yy));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).xx + ',' + (<MouseEvent>e).yy));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.xx + ',' + e.yy)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, (e: Event) => console.log(e));
