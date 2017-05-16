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
