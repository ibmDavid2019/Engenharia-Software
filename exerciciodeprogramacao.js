//
//programa principal
//
console.log(receberNomeMes(1))
console.log(receberNomeMes(3))
console.log(receberNomeMes(12))


//
//funcoes
//
function receberNomeMes(mes)
{
  let meses = ["Janeiro", "Fevereiro", "Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
  mes--
  return meses[mes]
}