function arrayDiff(a, b) {
  if (!b.length) {
    return a;
  }

  return a.filter(item => {
    for (let i = 0; i < b.length; i++) {
      console.log('item', item, ' - ', b[i], ' - ',  item !== b[i]);

      if (item !== b[i]) {
        console.log('huy');
        return true;
      }
    }

    return false;
  });
}

const cond1 = [-20, 20, -1, 6, -17, -4, 16, 17, 15, -20, -2, -20];
const cond2 = [17, 16, -20, -2, 15, -1, 6, -17];

console.log('result = ', arrayDiff(cond1, cond2));
