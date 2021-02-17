/*
* Given: an array containing hashes of names
* Return: a string formatted as a list of names separated by commas except for the last two names, which should be
* separated by an ampersand.
* list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
* Result Bart, Lisa & Maggie
*/

const names = [
  { name: 'Bart' },
  { name: 'Lisa' },
  { name: 'Maggie' }
];

function list(names) {
  const listLength = names.length - 1;

  return names.reduce((acc, current, index) => {
    let separator = ', ';
    let str = '';

    if (index === listLength - 1) {
      separator = ' & ';
      str = `${current.name}${separator}`;
    } else if (index === listLength) {
      str = `${current.name}`;
    } else {
      str = `${current.name}${separator}`;
    }

    return acc + str;
  }, '');
}

console.log(list(names));
