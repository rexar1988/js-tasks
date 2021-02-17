function digital_root(n) {
  const numbers = n.toString().split("").map(item => parseInt(item));
  const root = numbers.reduce((acc, current, index) => {
    return acc + current;
  });

  return (root.toString().split('').length > 1) ? digital_root(root) : root;
}

console.log(digital_root(493193));
