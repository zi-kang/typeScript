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
//不使用泛型的情形
function identity0(arg) {
    return arg;
}
// or
function identity1(arg) {
    return arg;
}
//使返回值与传入的值的类型完全相同，不管是任何类型的传入值
//使用的是类型变量的一种
function identity(arg) {
    return arg;
}
//两种使用方法
var output = identity("myString");
var output1 = identity("myString");
console.log(output + '  ' + output1);
//使用.length属性,避免了number属性没有.length这个属性
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
//泛型类型函数:
function identity2(arg) {
    return arg;
}
//调用(使用)方式：
var myIdentity = identity2;
var myIdentity1 = identity2;
var myIdentity2 = identity2;
var myIdentity3 = identity2;
var myIdentity4 = identity2;
//泛型类
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(1, 2));
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "++";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentity4(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity4({ length: 10, value: 3 }); //调用的时候必须传入一个length属性的值
loggingIdentity4("ukdjsbhbfhjs");
//在泛型约束中使用类型参数
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
        console.log(id);
    }
    return target;
}
var xx = { a: 1, b: 2, c: 3, d: 4, q: 10 };
copyFields(xx, { b: 10, d: 20 }); // okay
copyFields(xx, { q: 90 });
//在泛型里使用类类型
function create(c) {
    return new c();
}
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function findKeeper(a) {
    console.log(a.prototype);
    return a.prototype.keeper;
}
// findKeeper(Lion).nametag;
// console.log( findKeeper(Bee).hasMask ); 
