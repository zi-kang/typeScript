function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAddFunc = function (x, y) { return x + y; };
var myAddFuncc = function (x, y) { return x + y; };
//don't know the number of parameter
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
