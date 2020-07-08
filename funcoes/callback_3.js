
console.log('--------Map--------')
const nums = [1,2,3,4,5]
const dobro = n => n * 2
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gio', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tespura', qtde: 1, preco: 19.20 },

]

const getNome = item => item.nome
const getTotal = item => item.qtde * item.preco

console.log(carrinho.map(getNome))
console.log(carrinho.map(getTotal))

let linhas = []

linhas.push(['---------------'])
i=1
while (i <= 5) {
  linhas.push([
      '<teste></teste>'
  ])
  i++;              
}

console.log(linhas)

let linhas2 = []

linhas2.push(['------222------'])

linhas.push(['<teste></teste>'])

// const nums = [1,2,3,4,5]
// const dobro = n => n * 2

let teste = []+5
//teste[0] = 1
const t = (el) => el[el.length] = "5"
console.log(teste.map(t))

console.log(linhas.length)

