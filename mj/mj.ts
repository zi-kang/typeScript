enum Diretcion {
    Up = 2,
    Down,
    Left,
    Right
}
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
console.log( FileAccess.G );

enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[ Enum.A ];
let nameA = Enum.A;
console.log( nameOfA +'&&&'+ nameA );

const enum Enum1 {
    A = 1,
    B = A * 2
}
console.log( Enum1.B );

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log( directions );

//外部枚举
declare enum Enum {
    D = 1,
    B,
    C = 2
}

console.log( Enum.A ); //0
console.log( Enum.B ); //undefined
console.log( Enum.C ); //undefined
console.log( Enum.D ); //undefined
//外部枚举在此处体现的并不是很明显