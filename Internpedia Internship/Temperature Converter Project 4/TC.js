
document.getElementById("convertBtn").addEventListener("click", convertTemperature);

function convertTemperature() {
  var inputTemp = parseFloat(document.getElementById("inputTemp").value);
  var tempType = document.getElementById("tempType").value;
  var resultElement = document.getElementById("result");

  if (tempType === "celsius") {
    var convertedTemp = (inputTemp * 9/5) + 32;
    resultElement.innerHTML = inputTemp + "°C = " + convertedTemp + "°F";
  } else {
    var convertedTemp = (inputTemp - 32) * 5/9;
    resultElement.innerHTML = inputTemp + "°F = " + convertedTemp + "°C";
  }
}