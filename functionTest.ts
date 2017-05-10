interface SearchFunc {
    (source: string , subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function( source: string , subString:string ) {
    let result= source.search( subString );
    if( result == -1 ){
        return false;
    }else{
        return true;
    }
}

let mysearch: SearchFunc;

mysearch = function(src: string, sub: string): boolean {
    let result = src.search( sub );
    if ( result == -1 ){
        return false;
    }else{
        return true;
    }
}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["tom","kunt"];
let myStr: string = myArray[0];
console.log( myStr );

class Animal {
    name: string;
}
class dog extends Animal {
    breed: number;
}

interface NotOkay {
    [x: number]: dog;
    [x: string]: Animal;
}