//合并接口
interface Box {
    height: number;
    width: number;
}
interface Box {
    scale: number;
}

let box: Box = {
    height: 5,
    width: 6,
    scale: 10
};
console.log( box );

interface Animal {
    name: string;
}
interface Sheep {
    name: string;
}
interface Dog {
    name: string;
}
interface Cat {
    name: string;
}
interface Cloner {
    clone(animal: Animal): Animal;
}
interface Cloner {
    clone(animal: Sheep): Sheep;
}
interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}
//三个借口合并为一个
interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
    clone(animal: Sheep): Sheep;
    clone(animal: Animal): Animal;
}

//注：合并接口时注意每组接口里的声明顺序保持不变，但各组接口之间的顺序是后来的接口重载出现在靠前位置。


interface Document {
    createElement(tagName: any): Element;
}
interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}
interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}
//由于特殊情况，所以三者合并后的接口是：
interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
}




















