// arrow function
const saudacao0 = (nome) => { 
  return 'Fala ' + nome + ', blz!?!'
};
const saudacao1 = (nome) => {'Fala ' + nome + ', blz!?!'};
const saudacao2 = (nome) => 'Fala ' + nome + ', blz!?!';
const saudacao3 = nome => `Fala ${nome}, blz!?!`;

console.log(saudacao3('Maria'));


// arrow function com array
const somar = (numeros) => {
  let total = 0;
  for(let n of numeros) {
    total += n;
  }
  return total;
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))

// arrow function com array valores variaveis
const somar2 = (...numeros) => {
  let total = 0;
  for(let n of numeros) {
    total += n;
  }
  return total;
}

console.log(somar2(1,2,10))
console.log(somar2(1,2,3,4))
console.log(somar2(1,2,3,4,5,6,7,8,9,10))