var Person = (function () {
    function Person() {
    }
    return Person;
}());
var p;
console.log(p); //undeined
// OK, because of structural typing
p = new Person();
console.log(p); //Person
var x;
var y = { name: 'Aice', location: 'Seattle' };
x = y;
console.log(x);
function greet(n) {
    console.log('Hello, ' + n.name);
}
greet(y);
//煎蛋比较两个函数
var z = function (a) { return 0; };
var t = function (b, s) { return 0; };
// z = t; error
t = z; //OK
var items = [1, 2, 3];
// Don't force these extra arguments
items.forEach(function (item, index, array) { return console.log(item); });
// Should be OK!
items.forEach(function (item) { return console.log(item); });
//函数参数双向协变
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
    /* ... */
    console.log(111222333);
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, function (e) { return console.log(e.xx + ',' + e.yy); });
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, function (e) { return console.log(e.xx + ',' + e.yy); });
listenEvent(EventType.Mouse, (function (e) { return console.log(e.xx + ',' + e.yy); }));
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenEvent(EventType.Mouse, function (e) { return console.log(e); });
//可选参数与剩余参数
function invokeLater(args, callback) {
    /* ... Invoke callback with 'args' ... */
    console.log(args);
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
//枚举
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var status1 = Status.Ready;
console.log(status1);
//status1 = Color.Green;  //error
//不同枚举之间不能兼容
//类
var Animal = (function () {
    function Animal(name, numFeet) {
    }
    return Animal;
}());
var Size = (function () {
    function Size(numFeet) {
    }
    return Size;
}());
var a;
var s;
a = s; //OK
s = a; //OK
console.log(a + ' ' + s); //undefined undefined
var x1;
var y1;
x1 = y1; // okay, y matches structure of x
var x2;
var y2;
//x2 = y2;  // Type 'string' is not assignable to type 'number'.
//A function whose declared type is neither 'void' nor 'any' must return a value.
var identity5 = function (x) {
    // ...
    return x;
};
var reverse5 = function (y) {
    // ...
    return y;
};
identity5 = reverse5; // Okay because (x: any)=>any matches (y: any)=>any
/*目前为止，我们使用了兼容性，它在语言规范里没有定义。 在TypeScript里，有两种类型的兼容性：子类型与赋值。 它们的不同点在于，赋值扩展了子类型兼容，允许给 any赋值或从any取值和允许数字赋值给枚举类型或枚举类型赋值给数字。

语言里的不同地方分别使用了它们之中的机制。 实际上，类型兼容性是由赋值兼容性来控制的甚至在 implements和extends语句里。*/
