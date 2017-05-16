//不使用泛型的情形
function identity0(arg: number): number {
    return arg;
}
// or

function identity1(arg: any): any {
    return arg;
}

//使返回值与传入的值的类型完全相同，不管是任何类型的传入值
//使用的是类型变量的一种
function identity<T>(arg: T): T {
    return arg;
}

//两种使用方法
let output = identity<string>("myString");
let output1 = identity("myString");
console.log(output+'  '+output1);

//使用.length属性,避免了number属性没有.length这个属性
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
function loggingIdentity1<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

//泛型类型函数:
function identity2<T>(arg: T): T {
    return arg;
}

//调用(使用)方式：
let myIdentity: <T>(arg: T) => T = identity2;
let myIdentity1: <U>(arg: U) => U = identity2;
let myIdentity2: {<T>(arg: T): T} = identity2;

//写一个泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}
let myIdentity3: GenericIdentityFn = identity2;
//or
interface GenericIdentityFn1<T> {
    (arg: T): T;
}
let myIdentity4: GenericIdentityFn1<number> = identity2;

//泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log( myGenericNumber.add(1,2) );

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "++";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

//泛型约束
interface Lengthwise {
    length: number;
}
function loggingIdentity4<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity4({length: 10, value: 3});//调用的时候必须传入一个length属性的值
loggingIdentity4("ukdjsbhbfhjs");

//在泛型约束中使用类型参数
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = source[id];
        console.log( id );
    }
    return target;
}

let xx = { a: 1, b: 2, c: 3, d: 4, q: 10 };

copyFields(xx, { b: 10, d: 20 }); // okay
copyFields(xx, { q: 90 });

//在泛型里使用类类型
function create<T>(c: {new(): T; }): T {
    return new c();
}
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K> (a: {new(): A;
    prototype: {keeper: K}}): K {
    console.log( a.prototype );
    return a.prototype.keeper;
}

// findKeeper(Lion).nametag;
// console.log( findKeeper(Bee).hasMask );