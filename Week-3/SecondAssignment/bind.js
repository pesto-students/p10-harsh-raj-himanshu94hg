//bind

const person = {
  name: "Himanshu",
  greeting: function (name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  },
};

const sayHello = person.greeting.bind(person, "Pesto");
sayHello();
// Output: "Hello, Pesto! My name is Himanshu."
