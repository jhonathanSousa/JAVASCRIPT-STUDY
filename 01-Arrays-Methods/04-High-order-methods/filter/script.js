// Método Array JavaScript para filtrar elementos em um array.

let cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'New York', population: 8175133},
  {name: 'Chicago', population: 2695598},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006}
];
let bigCity = cities.filter(element => element.population < 3000000);
console.log(bigCity);

let numbers = [1, 2 , 3, 4 , 5 , 6 ,7 , 8, 9 , 10];

let numbersMin = numbers.filter(n => n % 2 == 1);

console.log(numbersMin);

