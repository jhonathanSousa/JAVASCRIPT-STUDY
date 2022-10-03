// Método do Array JavaScript para excluir elementos existentes, inserir novos elementos e substituir elementos em um array.

let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(1, 3);
console.log(scores);

let colors = ['red', 'green', 'blue'];
colors.splice(0, 0, 'pink');

console.log(colors);