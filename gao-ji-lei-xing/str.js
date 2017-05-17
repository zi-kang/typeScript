var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UIElement = (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
            console.log(easing);
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
            console.log("没有定义这个类型");
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); //error
// ... more overloads ...
function createElement(tagName) {
    // ... code goes here ...
}
function area(s) {
    console.log(s);
    console.log(s.kind);
    switch (s.kind) {
        case "number": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
var types = area({ kind: "number", size: 12 });
console.log(types);
function areas(s) {
    switch (s.kind) {
        case "number": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
    // should error here - we didn't handle case "triangle"
}
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area2(s) {
    switch (s.kind) {
        case "number": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s); // error here if there are missing cases
    }
}
// let types2 = area2({kind:"jhasd",size:12});//试验用例
//多态的this类型
var BasicCalculator = (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
console.log(v); //11
var ScientificCalculator = (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var vv = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
console.log(vv);
