/*
* В функцию передается массив, функция должна вернуть сумму всех нечетных чисел больше 0
*/

const arr = [5, 0, -5, 20, 88, 17, -32]; // 22

function calculate(arr) {
  return arr.reduce((acc, current) => {
    if (current > 0 && current % 2 !== 0) {
      return acc + current;
    }

    return acc;
  }, 0);
}

console.log(calculate(arr));

