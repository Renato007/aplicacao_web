// o "." acessa os membros e os 
console.log(typeof console)
console.log(Math.ceil(6,1))
// console e Math no javascript neste contexto são objetos e os pontos chama os métodos ou os atributos
const obj1 ={}
obj1.nome = 'bola'
console.log(obj1.nome)
obj1['nome'] = 'bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exerc = function(){
        console.log("Exercicio....")
    }
    // você vai atribuir o nome no atributo nome e toda vez que estanciar um Obj o nome atribuito no parametro vai ser torna publico.
}
const obj2 = new Obj('Casa')
const obj3 = new Obj('Carro')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exerc()