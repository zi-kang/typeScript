/*
let sym1 = Symbol();
let sym2 = Symbol("key");*/
/*function Symbol(msg?){
    return msg;
}*/
//上述函数只是为了不使得编译阶段报错
let sym1 = Symbol();
let sym2 = Symbol("key"); // 可选的字符串key
console.log( sym1 );
console.log( sym2 );
//Symbols是不可改变且唯一的
let sym3 = Symbol("key");
console.log( sym2 === sym3 );

//像字符串一样，symbols也可以被用做对象属性的键
let sym = Symbol();
let obj = {
    [sym]: "value"
};
console.log(obj[sym]);// "value"

const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol](){
        return "类型名称是：C";
    }
}

let c = new C();
let className = c[getClassNameSymbol]();
console.log( className );















