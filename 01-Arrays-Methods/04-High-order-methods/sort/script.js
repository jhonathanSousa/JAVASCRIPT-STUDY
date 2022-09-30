// Método JavaScript Array para classificar arrays de números, strings e objetos.

let numbers = [0, 1 , 2, 3, 10, 20, 30, 25 ];
numbers.sort((a,b) => a -b);

console.log(numbers);

let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
animals.sort();
console.log(animals);

let employees = [
  {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
  {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
  {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

employees.sort((a, b) => a.salary - b.salary);
console.table(employees);