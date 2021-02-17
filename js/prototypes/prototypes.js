// Функция конструктор
function User(name = 'John', lastName = 'Doe') {
  this.userName = name;
  this.lastName = lastName;
}

// Static property
User.age = 31;

// Static method displays static value
User.getAge = function(name) {
  return `Name: ${name}`;
}
console.log(Object.getPrototypeOf(new User()));
console.dir(User);
console.log(User.getAge('Denis'));
const user = new User()

// Prototype
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
console.dir( rabbit );
