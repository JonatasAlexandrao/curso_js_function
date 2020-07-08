
const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 0, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tespura', qtde: 1, preco: 19.20, fragil: true },

]

// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

const testeFragil = item => item.fragil 
const multiplica = item => item.qtde * item.preco

const getMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1
  const novoTotal = acc.total + el
  //console.log (acc, el)
  return {
    qtde: novaQtde, 
    total: novoTotal, 
    media: novoTotal / novaQtde
  }
  
}

const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
  .filter(testeFragil)
  .map(multiplica)
  .reduce(getMedia, mediaInicial)
  .media

//console.log('fragil?: ', fragilTrue)
//console.log('Valor Total: ', totalValor)

console.log(media)

console.log('--------------')