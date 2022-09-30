let calcDateOne = new Date('09/26/2022');
let calcDateTwo = new Date('10/01/2022');

let calcDate = (calcDateOne.getTime() - calcDateTwo.getTime()) / (1000 * 3600 * 24);

console.log(`The deference days is ${calcDate} `);
