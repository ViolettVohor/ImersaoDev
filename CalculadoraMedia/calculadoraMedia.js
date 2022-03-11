var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 10
var notaDoTerceiroBimestre = 8
var notaDoQuartoBimestre = 8
var notaSoma = notaDoPrimeiroBimestre + notaDoSegundoBimestre 
+ notaDoTerceiroBimestre + notaDoQuartoBimestre
var notaMedia = notaSoma / 4
var notaFixada = notaMedia.toFixed(1)

var situacao = ""

if (notaFixada >= 7) {
  situacao = "Aprovado"
} else {
  situacao = "Reprovado"
}

var resultado = document.querySelector("#resultado")
var notaHtml = document.querySelector("#nota")

resultado.innerHTML += situacao
notaHtml.innerHTML += notaFixada

console.log((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre 
  + notaDoQuartoBimestre) / 4)
console.log(notaFixada)

// Revision

// Variáveis, tipos primitivos, operadores aritméticos, concatenação, alert e console.log

// Desafio 01: Verificar a aprovação do aluno ✓
// Desafio 02: Estilizar página ✓
// Desafio 03: Imprimir o conteúdo na página ✓
// Desafio 04: Conversor de temperatura/distancia/moeda ✓
/* Desafio 05: Adicionar toda a operação dentro do console.log. 
    Quebrar a conta em mais de uma variável ✓ */ 