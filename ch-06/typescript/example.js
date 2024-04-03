var Person = /** @class */ (function () {
    function Person(inName, inAge) {
        this.name = inName;
        this.age = inAge;
    }
    Person.prototype.speak = function (wisdom) {
        console.log("Hello! My name is ".concat(this.name, " and I am ").concat(this.age, " years old. A bit of wisdom for you: ").concat(wisdom, "."));
    };
    return Person;
}());
var p = new Person("Xander", 36);
p.speak("Man has not evolved an inch from the primordial slime that spawned him");
//p = "abc";
