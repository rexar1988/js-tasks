/*
* Цифровой корень - это рекурсивная сумма всех цифр числа.
* Для данного n возьмите сумму цифр n. Если это значение состоит из более чем одной цифры, продолжайте уменьшать таким
* образом, пока не будет получено однозначное число. Ввод будет неотрицательным целым числом.
*
* 16      -->  1 + 6 = 7
* 942     -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
* 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
* 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(number) {
  const toArray = (n) => {
    return Array.from(n.toString()).map(n => parseInt(n, 10));
  };

  if (number.length === 1) {
    return number;
  }

  const numbersSum = toArray(number).reduce((acc, current) => acc + current, 0);
  const isMoreThanOne = toArray(numbersSum).length > 1;

  if (isMoreThanOne) {
    return digital_root(numbersSum);
  }

  return numbersSum;
}

console.log(digital_root(493193));
