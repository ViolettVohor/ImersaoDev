function Converter() {
  var distanciaKM = document.getElementById("distancia")
  var distanciaAL = distanciaKM.value / 9460730777119.56

  var mostrar = document.getElementById("anos-luz")
  mostrar.innerHTML = "Esta distância em anos-luz é " + distanciaAL
}