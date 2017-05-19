/*namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}*/
//注释是因为会和下面的合并后的nameSpace中的重复
//合并后等同于
var Animals;
(function (Animals) {
    var Zebra = (function () {
        function Zebra() {
        }
        return Zebra;
    }());
    Animals.Zebra = Zebra;
    var Dog = (function () {
        function Dog() {
        }
        return Dog;
    }());
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
var Animal;
(function (Animal) {
    /*export function doAnimalsHaveMuscles() {
        return haveMuscles;  // <-- error, haveMuscles is not visible here
    }*/
    var haveMuscles = true;
    function animalsHaveMuscles() {
        return haveMuscles; //right
    }
    Animal.animalsHaveMuscles = animalsHaveMuscles;
})(Animal || (Animal = {}));
//命名空间与类和函数和枚举类型合并
var Album = (function () {
    function Album() {
    }
    return Album;
}());
(function (Album) {
    var AlbumLabel = (function () {
        function AlbumLabel() {
        }
        return AlbumLabel;
    }());
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
(function (buildLabel) {
    buildLabel.suffix = "!";
    buildLabel.prefix = "Hello, ";
})(buildLabel || (buildLabel = {}));
console.log(buildLabel("kunt"));
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    function mixColor(colorName) {
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
    Color.mixColor = mixColor;
})(Color || (Color = {}));
console.log(Color.mixColor("white")); //7
