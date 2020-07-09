
// setInterval(function() {
//   console.log('Executando callback...')
//   console.log('Executando callback...')
// }, 2000)
let i=0

function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setInterval(function() {
      i++
      console.log('Executando promise...' + i)
      resolve()
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)