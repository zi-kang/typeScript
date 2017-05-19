//可迭代性
//for .. of
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
//of vs in
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet of pets) {
    console.log( "测试" );
    console.log(pet); // 不出现任何结果
}
for (let pet in pets) {
    console.log(pet); // "species"
}

//代码生成
let numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num);
}