const text = document.getElementById("text");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(text.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"; 
        // alt + 0176 to get degree symbol
        // to.Fixed(1) gives one digit past the decimal place 
    } else if (toCelsius.checked) {
        temp = Number(text.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"; 
    } else {
        result.textContent = "Select a unit";
    }
}