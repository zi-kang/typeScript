function greeter(person) {
    return "heloo, " + person;
}
var user = "huzikang user";
document.body.innerHTML = greeter(user);

function gre( people: string ){
    return "hello ," + people;
}

var use = 'hzk';
console.log( gre( use ) );

interface Person {
    firstName: string;
    lastName: string;
}

function greeter1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user1 = { firstName: "Jane", lastName: "User" };
console.log( greeter1(user1) );