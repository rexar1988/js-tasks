function createPhoneNumber(numbers) {
  return numbers.reduce((accumulator, currentValue, index, array) => {
    if (index === 0) {
      return `(${currentValue}`
    } else if (index === 2) {
      return `${accumulator}${currentValue}) `
    } else if (index === 6) {
      return `${accumulator}-${currentValue}`;
    }

    return `${accumulator}${currentValue}`;
  }, '')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // returns "(123) 456-7890"
