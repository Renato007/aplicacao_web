let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!Infinity)
console.log(!!{})
console.log(!!(isAtivo = Infinity))
console.log(' ')

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)//algo que não é número
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = ''
console.log(nome || "desconhecido")