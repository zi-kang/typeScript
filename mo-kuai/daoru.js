/*import { ZipCodeValidator } from "./ZipCodeValidator";  //Uncaught ReferenceError: exports is not defined
let myValidator = new ZipCodeValidator();*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let myValidator = new ZCV();
//将整个模块导入到一个变量，并通过它来访问模块的导出部分
var validator = require("./mk");
var myValidator = new validator.ZipCodeValidator();
//具有副作用的导入模块
require("./my-module.js");
//默认导出
var JQuery = (function () {
    function JQuery() {
        this.name = "kunt";
    }
    return JQuery;
}());
exports.JQuery = JQuery;
// export default $;
/*import $ from "JQuery";
$("button.continue").html( "Next Step..." );*/
//每一个模块只能有一个默认导出的模块，为了不和下面的冲突，故注释掉
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
ZipCodeValidator.numberRegexp = /^[0-9]+$/;
exports.default = ZipCodeValidator;
// import validator1 from "./mk";
// let myValidator = new validator();
