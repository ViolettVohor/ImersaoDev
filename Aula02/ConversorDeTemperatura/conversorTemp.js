function Converter() {
  var tempCelsius = document.getElementById("celsius").value
  var tempFahrenheit = (tempCelsius * 1.8) + 32

  var result = document.getElementById("temp")

  result.innerHTML = "Temperatura em Fahrenheit: " + tempFahrenheit + "ºF"
}