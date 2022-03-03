var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista "

var paciente = document.querySelector("#primeiro_paciente")
var tdPeso= paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")

var altura = tdAltura.textContent;

var td_IMC = paciente.querySelector(".info-imc");

var calculoIMC = peso/(altura*altura);
 
td_IMC.textContent = calculoIMC;


console.log(paciente) // tr 
console.log(peso) // obter o valor do peso
console.log(altura) // obter o valor da altura
console.log(calculoIMC) // obter o resultado do calculo


