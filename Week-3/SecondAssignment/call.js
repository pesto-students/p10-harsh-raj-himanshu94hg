//call

function greeting(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = {
  name: "Himanshu",
};

greeting.call(person, "Pesto");
// Output: "Hello, Pesto! My name is Himanshu."
