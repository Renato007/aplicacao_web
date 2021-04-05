const valores = [7.7,8.7,9.6,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[5]=10
console.log(valores)
//arrays são homonogenios
//mistura os valores
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//excluir elementos de uma array
console.log(valores.pop())
delete valores[0]
console.log("aqui" + valores)
console.log(typeof valores)