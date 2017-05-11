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
