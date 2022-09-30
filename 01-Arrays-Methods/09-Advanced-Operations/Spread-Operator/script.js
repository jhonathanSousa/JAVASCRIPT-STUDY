// Distribui elementos de um objeto iterável

const odd = [1,3,5,7];
const combined = [...odd, 2,4,6];
console.log(combined);

const numbers = [1,5,6,8,9,10];
const name = ['João', 'Paulo'];
const empty = [];

empty.push(...numbers, ...name);
console.log(empty);