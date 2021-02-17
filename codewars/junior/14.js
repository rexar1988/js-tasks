/*
* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the
* "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a
* squared, regardless of the order.
*/

const a = [121, 144, 19, 161, 19, 144, 19, 11]
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2) {

}

function sortArrays(array) {
  for (const [key, value] of array.entries()) {
    if (!Array.isArray(value)) {
      array[key] = Object.entries(value);

      this.sortArrays(array[key]);
    }

    if (Array.isArray(value)) {
      this.sortArrays(value);
    }

    array.sort((a, b) => {
      if (a.toString() === b.toString()) {
        return 0;
      }

      if (a.toString() > b.toString()) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
