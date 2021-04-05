//armazenar uma função em uma variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2,3)

// Armazenamento uma função arrow  em uma variavel
const soma = (a,b) => {
    return a =b 
}
console.log(soma(2,3))
// quando tem uma linha
//retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(5,3))
const imprimir2 = a => console.log(a)
imprimir2('oi!')