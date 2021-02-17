const a = Symbol('denis')
const b = 'myProp'

console.log(a);

const flag = {
  [a]: true,
  [b]: false
}

if (flag[a]) {
  // flag[a] = false;
  // flag.b = false;
  console.log(flag[a], flag[b]);
}
