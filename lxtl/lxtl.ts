class Rhino{
    name: string;
}
class Elephant{
    name: string;
}
class Snake{
    name: string;
}

interface Animal{
    name?:string;
    num?:number;
}
//上面的这些仅仅是为了编译的时候不报错



//最佳通用类型
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
//上下文类型
window.onmousedown = function(mouseEvent: any) {//注意参数的类型
    console.log(mouseEvent.buton);
};

function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
}

console.log( zoo );