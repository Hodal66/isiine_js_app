// let numbers = new Set();
// numbers.add("Hello");
// numbers.add("set");

// console.log(numbers);

// const person = {};
// person.firstName = "Muheto";
// person.lastName = "Hodal";
// person.age = 40;

// console.log(person);
//how to create a class called student

// class Student {
//   constructor(firstName, lastName, age, sex, regNumber, className) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.sex = sex;
//     this.regNumber = regNumber;
//     this.className = className;
//   }
// }
// class Cars {
//   constructor(color, carName, carCost, carSize) {
//     this.color = color;
//     this.carName = carName;
//     this.carCost = carCost;
//     this.carSize = carSize;
//   }
// }

// let newStudent = new Student(
//   "Muheto ",
//   "hodal",
//   33,
//   "Male",
//   "12rp2022",
//   "Male"
// );
// console.log(newStudent);

const newPerson = {
  firstName: "keza",
  lastName: "Muheto",
  sex: "Male",
  number: 2000,
};
delete newPerson.sex;
delete newPerson["number"];
let text = [];
for (const i in newPerson) {
  text.push(newPerson[i]);
}
console.log(text);
