// Como verificar se todos os elementos do array passam em um teste 

let numbers = [1, 3, 5];
let isEven = numbers.every(function (e) {
    return e % 2 == 1;
});

console.log(isEven);