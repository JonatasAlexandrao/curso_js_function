
const soma = (num1) => {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    }
  }
}
console.log(soma(3)(4)(5));

/*const calcular = num1 => {
  return num2 => {
    return (fn) => {
      return fn(num1, num2);
    }
  }

}*/
const calcular = num1 => num2 => fn => fn(num1, num2);

    
  



const subtrair = (num1, num2) => {
  return num1 - num2;
}

const multiplicar = (num1, num2) => {
  return num1 * num2;
}

console.log(calcular(10)(5)(subtrair));
console.log(calcular(10)(5)(multiplicar));