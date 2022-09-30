// Método JavaScript Array para nivelar um array.

const numbers = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbers = numbers.flat(2);
// const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers);