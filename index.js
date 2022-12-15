// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }
// const myFather = [
//   new Person("Sally", "Rally", 48, "green"),
//   new Person("John", "Doe", 50, "blue"),
// ];
// // console.log(myFather);
// function Marks(Eng, Fre, Kiny, Kiswahile) {
//   (this.English = Eng),
//     (this.French = Fre),
//     (this.Kinyarwanda = Kiny),
//     (this.Kiswahile = Kiswahile);
// }
// const Solution = [new Marks(900, 299, 39, 432), new Marks(900, 299, 39, 432)];

// console.log(Solution);

// function Person(first,last, age)

class name {
  constructor(SpadeCard, HeartCard, DiamondCard, playCard) {
    this.SpadeCard = SpadeCard;
    this.HeartCard = HeartCard;
    this.DiamondCard = DiamondCard;
    this.playCard = playCard;
  }
}
const FirstCardCollection = new Set();
let cards = FirstCardCollection.add(["spade", "heart", "diamond", "say"]);
cards.add({
  name: "muheto",
  age: 24,
  sex: "Male",
});

console.log(cards);
