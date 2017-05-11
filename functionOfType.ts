function add(x: number, y: number):number {
    return x + y;
}
let myAdd = function(x: number, y: number):number{
    return x + y;
}
let myAddFunc: (x: number, y: number) => number = function(x: number, y: number): number { return x+y; }
let myAddFuncc: (baseValue: number, increment: number) => number =
    function(x,y){ return x + y; };