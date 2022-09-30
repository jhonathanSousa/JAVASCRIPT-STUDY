// Os métodos JavaScript para encontrar a posição de um elemento em um array.

let scores = [10, 20, 30, 10, 40, 20];

console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(20)); // 2

// O lastIndexOf() método busca o elemento de trás para frente,

console.log(scores.lastIndexOf(10)); // 3
console.log(scores.lastIndexOf(20)); // 5
console.log(scores.lastIndexOf(50)); // -1
