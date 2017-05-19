"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
//可以使用到处语句改写上面的例子
/*class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };*/
//重新导出
var ParseIntBasedZipCodeValidator = (function () {
    function ParseIntBasedZipCodeValidator() {
    }
    ParseIntBasedZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && parseInt(s).toString() === s;
    };
    return ParseIntBasedZipCodeValidator;
}());
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
// 导出原先的验证器但做了重命名
// export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";
// export * from "./StringValidator"; // exports interface StringValidator
// export * from "./LettersOnlyValidator"; // exports class LettersOnlyValidator
// export * from "./ZipCodeValidator";  // exports class ZipCodeValidator
//以上全部注释是因为没有在外部建立相应的文件来导出，所以会导致编译过程中出错
