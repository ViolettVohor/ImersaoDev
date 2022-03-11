function Converter() {
  var valorElemento = document.getElementById("valor")
  var valorEmDolar = parseFloat(valorElemento.value)
  console.log(valorEmDolar)

  var valorEmReal = valorEmDolar * 5

  var elementoValorConvertido = document.querySelector("#valorConvertido")
  var valorConvertido = "O resultado em real é R$ " + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido
}

/* 
 Desafio 01: Escolha a moeda a ser convertida
 Desafio 02: Calcular quanto tempo leva, na velocidade da luz,
 para ir da Terra até uma estrela, de KM para anos-luz
 Desafio 03: Upgrade conversor de temperatura.
 Desafio 04: Valor em Bitcoins.
 */