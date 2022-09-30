// Método Array JavaScript para adicionar um ou mais elementos ao início de um array.

let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let weekends = ['Sat', 'Sun'];

days.unshift(...weekends);

console.log(days);