// var será visivel fora do bloco , visivel globalmente
{
    {
        {
            { var sera = "Sera?" }
        }
    }
}
// var criada fora de função ficou visivel com global
console.log(sera)
function teste(){
    var local =123
    console.log(local)
    // var criada dentro de uma função ela é local
}
teste()
//console.log(local) da erro
