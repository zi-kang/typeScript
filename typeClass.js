var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fllName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello, " + person.firstName + ' ' + person.lastName + ' ' + person.middleInitial;
}
var user = new Student("hu", "zi", "kang");
console.log(greeter(user));
