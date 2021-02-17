const obj = {
  [Symbol.iterator](n = 10) {
  let i = 0;

  return {
    next() {
      if (i < n) {
        return { value: ++i, done: false }
      }

      return { value: undefined, done: true }
    }
  }
}
}

for (const k of obj) {
  console.log(k);
}


// const s1 = Symbol('name');
// const obj = {
//   [s1]: 'Denis'
// };
// console.log(obj[Symbol.for('name')]);

