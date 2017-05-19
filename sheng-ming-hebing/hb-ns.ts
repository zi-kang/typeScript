/*namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}*/
//注释是因为会和下面的合并后的nameSpace中的重复
//合并后等同于
namespace Animals {
    export interface Legged { numberOfLegs: number; }

    export class Zebra { }
    export class Dog { }
}

namespace Animal {
    /*export function doAnimalsHaveMuscles() {
        return haveMuscles;  // <-- error, haveMuscles is not visible here
    }*/
    let haveMuscles = true;
    export function animalsHaveMuscles() {
        return haveMuscles; //right
    }
}


//命名空间与类和函数和枚举类型合并
class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { }
}

function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
    export let suffix = "!";
    export let prefix = "Hello, ";
}

console.log(buildLabel("kunt"));


enum Color {
    red = 1,
    green = 2,
    blue = 4
}
namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}
console.log( Color.mixColor("white") );//7












