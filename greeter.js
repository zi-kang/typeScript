function greeter(person) {
    return "heloo, " + person;
}
var user = "huzikang user";
document.body.innerHTML = greeter(user);
function gre(people) {
    return "hello ," + people;
}
var use = 'hzk';
console.log(gre(use));
function greeter1(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user1 = { firstName: "Jane", lastName: "User" };
console.log(greeter1(user1));
