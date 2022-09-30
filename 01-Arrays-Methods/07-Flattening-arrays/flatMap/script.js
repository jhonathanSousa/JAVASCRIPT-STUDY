// Método JavaScript Array que mapeia cada elemento em um array usando uma função de mapeamento e nivela o resultado em um novo array.

let cart = [{
  name: 'Smartphone',
  qty: 2,
  price: 500,
  freeOfCharge: false
},
{
  name: 'Tablet',
  qty: 1,
  price: 800,
  freeOfCharge: false
}
];

let newCart = cart.flatMap(
  (item) => {
      if (item.name === 'Smartphone') {
          return [item, {
              name: 'Screen Protector',
              qty: item.qty,
              price: 5,
              freeOfCharge: true
          }]
      } else {
          return [item];
      }
  }
);

console.log(newCart);