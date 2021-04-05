const escola ="Cod3r"
//retorna o caracter de acordo da posição
console.log(escola.charAt(4))
// retorna o valor do indice na tabela de unicode
console.log(escola.charCodeAt(3))
//retorna o valor indice da letra encontrada na string
console.log(escola.indexOf('C'))
//retprna a string começando de um ponto inicial até o ponto final
console.log(escola.substring(1,4))
console.log(escola.substring(0,3))
//concatenar
console.log('Escola '.concat(escola).concat("!"))
// o simbolo + faz sentido de concatenar
console.log('Escola ' + escola +"!")
//subsitiuir o digito
console.log(escola.replace(3, 'e'))
// quebrar um string em unidades de uma array
console.log("Ana,Maria,Pedro".split(','))

