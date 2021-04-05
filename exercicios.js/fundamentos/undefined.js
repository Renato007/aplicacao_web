let valor // não inicializada
console.log(valor)// 
//console.log(valor2)// exibi is not defined
valor = null
// inicializada no entanto  ausencia de valor não aponta local de memoria
console.log(valor)
//console.log(valor.toString())// vai dar erro!
const produto = {}
// ele vai dizer que não esta definido o valor do preço
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)
//delete.produto.preco
produto.preco = null // sem preço
// null não permite acessar nenhuma função , método ..
console.log(produto)

