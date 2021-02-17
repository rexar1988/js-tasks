function XO(str) {
  const oSymbol = str.split('').filter(item => item.toLowerCase() === 'o');
  const xSymbol = str.split('').filter(item => item.toLowerCase() === 'x');

  if (str === '') {
    return true;
  }

  if (!oSymbol.length || !xSymbol.length) {
    return false;
  }

  return oSymbol.length === xSymbol.length;
}

console.log(XO('ooxXm'));
