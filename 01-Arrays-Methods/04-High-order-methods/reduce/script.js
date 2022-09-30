// Método para reduzir um array a um valor.

let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
];

let cart = shoppingCart.reduce((previousValue, currentValue) => { return previousValue + currentValue.qty * currentValue.price; }, 0);

console.log(cart);