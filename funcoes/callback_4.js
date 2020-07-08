

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tespura', qtde: 1, preco: 19.20 },

]

console.log('-------Filter-------')

// a função passada vai retornar verdadeiro ou falso, 
//se for verdadeiro o item entra no novo array.
const qtdeMaiorQueZero = item => item.qtde > 0
const getNome = item => item.nome
const qtdeMuitoGrande = item => item.qtde >= 1000

const nomeItensValidos =  carrinho
.filter(qtdeMaiorQueZero)
.map(getNome)

console.log(nomeItensValidos)
console.log('--------------------')