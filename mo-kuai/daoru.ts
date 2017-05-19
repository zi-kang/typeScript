/*import { ZipCodeValidator } from "./ZipCodeValidator";  //Uncaught ReferenceError: exports is not defined
let myValidator = new ZipCodeValidator();*/

//可以对导入内容重命名

import { ZipCodeValidator as ZCV } from "./mk";
// let myValidator = new ZCV();

//将整个模块导入到一个变量，并通过它来访问模块的导出部分
import * as validator from "./mk";
let myValidator = new validator.ZipCodeValidator();

//具有副作用的导入模块
import "./my-module.js";


//默认导出
export class JQuery {
    name: string = "kunt";
}
declare let $: JQuery;
// export default $;
/*import $ from "JQuery";
$("button.continue").html( "Next Step..." );*/
//每一个模块只能有一个默认导出的模块，为了不和下面的冲突，故注释掉

export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}
// import validator1 from "./mk";
// let myValidator = new validator();



























































































