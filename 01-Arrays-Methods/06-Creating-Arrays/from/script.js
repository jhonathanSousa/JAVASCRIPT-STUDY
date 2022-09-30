// Método JavaScript que cria um novo array a partir de um objeto tipo array ou iterável.

let even = {
  *[Symbol.iterator]() {
      for (let i = 0; i < 10; i += 2) {
          yield i;
      }
  }
};
let evenNumbers = Array.from(even);
console.log(evenNumbers);