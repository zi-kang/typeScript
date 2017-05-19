"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("./observable");
//编译的时候会报错
//error TS2322: Type '(f: any) => void' is not assignable to type '<U>(f: (x: any) => U) => Observable<U>'
observable_1.Observable.prototype.map = function (f) {
    // ... another exercise for the reader
    // console.log(123);
};
// let test = Observable.prototype.map;
