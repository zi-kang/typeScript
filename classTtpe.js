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
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DiitalClock = (function () {
    function DiitalClock(h, m) {
    }
    DiitalClock.prototype.tick = function () {
        console.log("hello world!");
    };
    return DiitalClock;
}());
var AnaogClock = (function () {
    function AnaogClock(h, m) {
    }
    AnaogClock.prototype.tick = function () {
        console.log("tick hello to yous!");
    };
    return AnaogClock;
}());
var digitaal = createClock(DiitalClock, 12, 17);
var analog = createClock(AnaogClock, 7, 32);
var square = {};
square.color = "blue";
square.height = 10;
square.width = 10;
console.log(square.height * square.width);
var squr = {};
squr.color = "red";
squr.sideLength = 10;
squr.penWidth = 15;
console.log(squr);
function getCounter() {
    var counter = function (start) { };
    counter.interval = 321;
    counter.reset = function () {
        console.log("I'm counter's reset function!");
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c);
console.log(c);
//类继承
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Buttons = (function (_super) {
    __extends(Buttons, _super);
    function Buttons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Buttons.prototype.select = function () { };
    return Buttons;
}(Control));
var TextBoxs = (function (_super) {
    __extends(TextBoxs, _super);
    function TextBoxs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBoxs.prototype.select = function () { };
    return TextBoxs;
}(Control));
var Images = (function () {
    function Images() {
    }
    Images.prototype.select = function () { };
    return Images;
}());
var Locations = (function () {
    function Locations() {
    }
    Locations.prototype.select = function () { };
    return Locations;
}());
