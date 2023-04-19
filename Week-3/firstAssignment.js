const memoize = (func) => {
  const results = {};
  return (...args) => {
    const argsKey = JSON.stringify(args);
    if (!results[argsKey]) {
      results[argsKey] = func(...args);
    }
    return results[argsKey];
  };
};

const fibonacci = memoize((n) => {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  } else return fibonacci(n - 1) + fibonacci(n - 2);
});
//the sixtieth phrase in the series should be printed
console.log(Fibonacci(60));
