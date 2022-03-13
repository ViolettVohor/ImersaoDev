function Dolar() {
  var valorElemento = document.getElementById("valor")
  var valorOriginal = parseFloat(valorElemento.value)

  var valorEmReal = valorOriginal * 5
  var valorEmBitcoin = valorOriginal / 38969

  var elementoValorConvertido = document.querySelector("#normal")
  var valorConvertido = "O resultado em real é R$ " + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido

  var valorBit = document.querySelector("#bitcoin")
  valorBit.innerHTML = "O resultado em Bitcoin é ₿ " + valorEmBitcoin
}

function Yen() {
  var valorElemento = document.getElementById("valor")
  var valorOriginal = parseFloat(valorElemento.value)

  var valorEmReal = valorOriginal / 23
  var valorEmBitcoin = valorOriginal / 4571658

  var elementoValorConvertido = document.querySelector("#normal")
  var valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2)
  elementoValorConvertido.innerHTML = valorConvertido

  var valorBit = document.querySelector("#bitcoin")
  valorBit.innerHTML = "O resultado em Bitcoin é ₿ " + valorEmBitcoin
}

function Euro() {
  var valorElemento = document.getElementById("valor")
  var valorOriginal = parseFloat(valorElemento.value)

  var valorEmReal = valorOriginal * 5.5
  var valorEmBitcoin = valorOriginal / 35709

  var elementoValorConvertido = document.querySelector("#normal")
  var valorConvertido = "O resultado em real é R$ " + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido

  var valorBit = document.querySelector("#bitcoin")
  valorBit.innerHTML = "O resultado em Bitcoin é ₿ " + valorEmBitcoin
}

/* 
 Desafio 01: Escolha a moeda a ser convertida. ✓
 Desafio 02: Calcular quanto tempo leva, na velocidade da luz,
 para ir da Terra até uma estrela, de KM para anos-luz. ✓
 Desafio 03: Upgrade conversor de temperatura. ✓
 Desafio 04: Valor em Bitcoins. ✓
 */