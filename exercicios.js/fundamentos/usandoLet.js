let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
// o var não fica restrito ao bloco interno ele joga para o bloco global
// como eles estão em esclopo diferentes eles poderam coexistir
// variavel VAR tem esclopo global e de função 
//variavel LET  tem esclopo global , bloco e função