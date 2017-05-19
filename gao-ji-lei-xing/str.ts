//字符串字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
            console.log( easing );
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
            console.log( "没有定义这个类型" );
        }
    }
}
let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy");//error

//区分函数重载
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// ... more overloads ...
function createElement(tagName: string): Element {
    // ... code goes here ...
}

//可辨识联合
interface Square {
    kind: number;
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
interface Triangle {
    kind: "Triangle";
    length: number;
    width: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    console.log( s );
    console.log( s.kind );
    switch (s.kind) {
        case "number": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}
let types = area({kind:"number",size:12});
console.log( types );

//完整性检查
type Shape = Square | Rectangle | Circle | Triangle;
function areas(s: Shape) {
    switch (s.kind) {
        case "number": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
    // should error here - we didn't handle case "triangle"
}

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}
function area2(s: Shape) {
    switch (s.kind) {
        case "number": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s); // error here if there are missing cases
    }
}
// let types2 = area2({kind:"jhasd",size:12});//试验用例

//多态的this类型
class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
}
let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
console.log( v );//11

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
}

let vv = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
console.log( vv );





















