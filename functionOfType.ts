function add(x: number, y: number):number {
    return x + y;
}
let myAdd = function(x: number, y: number):number{
    return x + y;
}
let myAddFunc: (x: number, y: number) => number = function(x: number, y: number): number { return x+y; }
let myAddFuncc: (baseValue: number, increment: number) => number =
    function(x,y){ return x + y; };

//don't know the number of parameter
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log( employeeName );

//this && 箭头函数
