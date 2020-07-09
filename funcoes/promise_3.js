
function gerarNumeroEntre(min, max) {
  if(min > max) {
    // invertendo as posições o que era min é guardado
    // no max e o que era max guardado no min.
    [max, min] = [min, max]
  }

  // return new Promise(resolve => {
  //   const fator = max - min +1
  //   const aleatorio = parseInt(Math.random() * fator) + min
  //   resolve(aleatorio)
  // })
  return new Promise(resolve => {
    const aleatorio = Math.floor(Math.random() * max) - min
    resolve(aleatorio)
  })
}

gerarNumeroEntre(1, 60)
  .then(num => num * 10)
  .then(numX10 => `O número gerado foi ${numX10}`)
  .then(console.log)