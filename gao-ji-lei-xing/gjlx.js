//交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
        var t = this;
        console.log(t);
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log(); //Object {name: "Jim", log: function}
//联合类型
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var res1 = padLeft("Hello world", 1);
var res2 = padLeft("Hello world", 2);
var res3 = padLeft("Hello world", '2');
var res4 = padLeft("Hello world", 4);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
function getSmallPet() {
    // ...
    console.log(11111);
    return;
}
var pet = getSmallPet();
//pet.layEggs(); // okay
//pet.swim();    // errors
//类型保护与区分类型
//全部出错
/*
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
else{
    console.log( '找不到正确的属性在哪里？？？' );
}*/
/*if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}*/
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
