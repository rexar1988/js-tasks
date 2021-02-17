function isIsogram(str){
  const toArray = str.toLowerCase().split('');

  for (const item of toArray) {
    const repeaters = toArray.filter((letter) => item === letter);

    if (repeaters.length > 1) {
      return false;
    }
  }

  return true;
}

function isIsogram2(str){
  return new Set(str.toUpperCase()).size === str.length;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram2('Dermatoglyphics'));
