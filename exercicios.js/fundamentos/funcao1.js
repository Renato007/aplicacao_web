function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

imprimirSoma(2)// erro de falta de número
imprimirSoma()// erro de falta de número

// FUNÇÃO COM RETORNO
function soma(a = 1, b = 1){
    return a+b;
}
console.log(soma(3,5))
console.log(soma(2))
console.log(soma())