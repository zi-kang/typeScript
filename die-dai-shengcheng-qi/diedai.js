//可迭代性
//for .. of
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
//of vs in
var list = [4, 5, 6];
for (var i in list) {
    console.log(i); // "0", "1", "2",
}
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var i = list_1[_a];
    console.log(i); // "4", "5", "6"
}
var pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";
for (var _b = 0, pets_1 = pets; _b < pets_1.length; _b++) {
    var pet = pets_1[_b];
    console.log("测试");
    console.log(pet); // 不出现任何结果
}
for (var pet in pets) {
    console.log(pet); // "species"
}
//代码生成
var numbers = [1, 2, 3];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var num = numbers_1[_c];
    console.log(num);
}
