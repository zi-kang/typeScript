//交叉类型
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
        let t = this;
        console.log( t );
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();//Object {name: "Jim", log: function}

//联合类型
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

let res1 = padLeft("Hello world", 1);
let res2 = padLeft("Hello world", 2);
let res3 = padLeft("Hello world", '2');
let res4 = padLeft("Hello world", 4);
console.log( res1 );
console.log( res2 );
console.log( res3 );
console.log( res4 );
//let indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错
//console.log( indentedString );

//联合类型要调用的话，必须得是都含有的属性才能调用，不然的话对象也不清楚自己是否含有该属性
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
    console.log( 11111 );
    return
}

let pet = getSmallPet();
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

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}