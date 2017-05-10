class Student {
    fllName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fllName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    middleInitial: string;
}

function greeter(person: Person){
    return "hello, "+person.firstName+' '+person.lastName+' '+person.middleInitial;
}

var user = new Student("hu","zi","kang");

console.log( greeter( user ) );