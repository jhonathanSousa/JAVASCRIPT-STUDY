// Método Array JavaScript para concatenar todos os elementos de um array em uma string separada por um separador.

const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass =  cssClasses.join();
console.log(btnClass);

const title = 'JavaScript array join example';
const url = title.split(' ')
    .join('-')
    .toLowerCase();

console.log(url);