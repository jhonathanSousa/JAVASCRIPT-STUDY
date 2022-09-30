// Permite desestruturar um array em variáveis ​​individuais.

const numbers = [10, 30, 40, 50, 70, 80, 90];
const [x, y , ...args] = numbers;
console.log(args);