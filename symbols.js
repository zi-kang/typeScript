/*
let sym1 = Symbol();
let sym2 = Symbol("key");*/
/*function Symbol(msg?){
    return msg;
}*/
//上述函数只是为了不使得编译阶段报错
var sym1 = Symbol();
var sym2 = Symbol("key"); // 可选的字符串key
console.log(sym1);
console.log(sym2);
//Symbols是不可改变且唯一的
var sym3 = Symbol("key");
console.log(sym2 === sym3);
//像字符串一样，symbols也可以被用做对象属性的键
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]); // "value"
var getClassNameSymbol = Symbol();
var C = (function () {
    function C() {
    }
    C.prototype[getClassNameSymbol] = function () {
        return "类型名称是：C";
    };
    return C;
}());
var c = new C();
var className = c[getClassNameSymbol]();
console.log(className);
var _a;
