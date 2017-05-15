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

