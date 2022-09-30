// Método Array JavaScript para verificar se pelo menos um elemento do array passa em um teste.

let marks = [ 4, 5, 7, 9, 10, 3 ];

lessThanFive = marks.some(function(e) {
    return e < 4;
});

console.log(lessThanFive);