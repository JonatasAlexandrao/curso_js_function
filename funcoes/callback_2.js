const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo (err, conteudo) {
  console.log(conteudo.toString())
}

// lê um arquivo que foi passado o caminho de forma Assíncrona
console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
console.log('Fim...')

// lê um arquivo que foi passado o caminho de forma Síncrona - ele vai rodar o programa até a linha do readFileSync, vai carregar e ler esse arquivo e só depois ele volta a ler o codigo. 
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')