var Diretcion;
(function (Diretcion) {
    Diretcion[Diretcion["Up"] = 2] = "Up";
    Diretcion[Diretcion["Down"] = 3] = "Down";
    Diretcion[Diretcion["Left"] = 4] = "Left";
    Diretcion[Diretcion["Right"] = 5] = "Right";
})(Diretcion || (Diretcion = {}));
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.G);
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[Enum.A];
var nameA = Enum.A;
console.log(nameOfA + '&&&' + nameA);
console.log(2 /* B */);
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
console.log(directions);
console.log(Enum.A); //0
console.log(Enum.B); //undefined
console.log(Enum.C); //undefined
console.log(Enum.D); //undefined
//外部枚举在此处体现的并不是很明显 
