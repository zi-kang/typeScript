var Rhino = (function () {
    function Rhino() {
    }
    return Rhino;
}());
var Elephant = (function () {
    function Elephant() {
    }
    return Elephant;
}());
var Snake = (function () {
    function Snake() {
    }
    return Snake;
}());
//上面的这些仅仅是为了编译的时候不报错
//最佳通用类型
var zoo = [new Rhino(), new Elephant(), new Snake()];
//上下文类型
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.buton);
};
function createZoo() {
    return [new Rhino(), new Elephant(), new Snake()];
}
console.log(zoo);
