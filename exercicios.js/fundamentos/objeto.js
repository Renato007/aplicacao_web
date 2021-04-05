// o objeto no javascript é uma coleção de pares ( chave e valor)

const prod1 = {}
prod1.nome = 'Celular'
prod1.preco= 3000,00
prod1['Desconto Legal'] = 0.50// evitar atributos com espaço
console.log('par de chave e valor')
console.log(prod1)
const prod2 = {
    nome: 'Camisa Polo',  preco: 79.00
}
//formato JSON , texto para trabalhar com sistemas diferentes 
//'{ "nome": "Camisa Polo",  "preco": 79.00}'
console.log(prod2)