// Utilizado para mesclar dois ou mais arrays em um único array.

const numbersOne = [1, 2, 4, 6];
const numbersTwo = [10, 5 , 7 ,8];

// let combined = numbersOne.concat(numbersTwo);
let combined = [...numbersOne, ...numbersTwo];

console.log(combined);