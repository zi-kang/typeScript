import { Observable } from "./observable";
declare module "./observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
        // map<U>(f: (x: T) => T  )
    }
}

//编译的时候会报错
//error TS2322: Type '(f: any) => void' is not assignable to type '<U>(f: (x: any) => U) => Observable<U>'
Observable.prototype.map = function (f) {
    // ... another exercise for the reader
    // console.log(123);
};
// let test = Observable.prototype.map;
