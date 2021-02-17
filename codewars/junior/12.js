/*
* В функцию передается массив целых чисел и число b. Необходимо написать функцию, которая вернет булево значение, true
* в случае если в переданном массив есть два числа, сумма котрых равна b
*/

const arr = [10, 15, 3, 7, 2, 1, 5];

function check(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; i < arr.length; j++) {
      if (arr[i] + arr[j] === number) {
        return true;
      }
    }
  }

  return false;
}

console.log('result ', check(arr, 19));

