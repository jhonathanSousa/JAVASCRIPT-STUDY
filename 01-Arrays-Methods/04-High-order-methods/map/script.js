// método Array JavaScript para transformar elementos em um array.

let numbers = [3, 4, 5, 6];
let numbersValue = numbers.map((number) => number * 3);
console.log(numbersValue);

let users = 
[
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

let usersFullName = users.map((element) => {
  return `${element.firstName} ${element.lastName}`;
});

console.log(usersFullName);