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

//可选参数与剩余参数
function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
    console.log( args );
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));

//枚举
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status1 = Status.Ready;
console.log( status1 );
//status1 = Color.Green;  //error
//不同枚举之间不能兼容

//类
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  //OK
s = a;  //OK
console.log( a + ' ' +s );//undefined undefined
//由此说明类是可以相互之间兼容的

//泛型
interface Empty<T> {
}
let x1: Empty<number>;
let y1: Empty<string>;
x1 = y1;  // okay, y matches structure of x

interface NotEmpty<T> {
    data: T;
}
let x2: NotEmpty<number>;
let y2: NotEmpty<string>;
//x2 = y2;  // Type 'string' is not assignable to type 'number'.


//A function whose declared type is neither 'void' nor 'any' must return a value.
let identity5 = function<T>(x: T): T {
    // ...
    return x
}

let reverse5 = function<U>(y: U): U {
    // ...
    return y
}

identity5 = reverse5;  // Okay because (x: any)=>any matches (y: any)=>any


/*目前为止，我们使用了兼容性，它在语言规范里没有定义。 在TypeScript里，有两种类型的兼容性：子类型与赋值。 它们的不同点在于，赋值扩展了子类型兼容，允许给 any赋值或从any取值和允许数字赋值给枚举类型或枚举类型赋值给数字。

语言里的不同地方分别使用了它们之中的机制。 实际上，类型兼容性是由赋值兼容性来控制的甚至在 implements和extends语句里。*/










