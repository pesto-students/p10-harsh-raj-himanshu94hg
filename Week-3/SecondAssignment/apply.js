//apply

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

const result = sum.apply(null, numbers);
console.log(result);
// Output: 6
