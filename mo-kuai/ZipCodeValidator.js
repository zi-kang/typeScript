"use strict";
/*
 export default class ZipCodeValidator {
 static numberRegexp = /^[0-9]+$/;
 isAcceptable(s: string) {
 return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
 }
 }*/
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
module.exports = ZipCodeValidator;
