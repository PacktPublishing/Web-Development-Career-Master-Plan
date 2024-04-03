class Person {
  name: string;
  age: number;
  constructor(inName: string, inAge: number) {
    this.name = inName;
    this.age = inAge;
  }
  speak(wisdom: string) {
    console.log(`Hello! My name is ${this.name} and I am ${this.age} years old. A bit of wisdom for you: ${wisdom}.`);
  }
}

let p: Person = new Person("Xander", 36);
p.speak("Man has not evolved an inch from the primordial slime that spawned him");
//p = "abc";
