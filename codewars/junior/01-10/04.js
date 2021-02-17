function fibonacci(num) {
  let current = 1;
  let prev = 1;
  let temp = 0;

  for (let i = 0; i < num; i++) {
    temp = current;
    current += prev;
    prev = temp;
  }

  return current;
}

console.log(fibonacci(6));
