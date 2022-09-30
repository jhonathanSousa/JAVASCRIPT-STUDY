// Método JavaScript para pesquisar o primeiro elemento em uma array, que satisfaça um teste.

let customers = [{
  name: 'ABC Inc',
  credit: 100
}, {
  name: 'ACME Corp',
  credit: 200
}, {
  name: 'IoT AG',
  credit: 300
}];

console.log(customers.find(c => c.credit > 200));