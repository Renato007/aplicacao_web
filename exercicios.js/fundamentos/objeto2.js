console.log(typeof Object)// Object sem instancia é uma função
console.log(typeof new Object)// voce cria um objeto por criar uma instancia 
const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente )
// agora com classe
class Produto{}// ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())
// para instanciar um objeto é utilizando a palavra new dentro da função