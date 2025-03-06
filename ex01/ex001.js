const VAR_KELVIN = 273.15;
const KELVIN_TO_FAHRENHEIT = 1.8;
const FAHRENHEIT_TO_CELSIUS = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const CELSIUS_TO_FAHRENHEIT = (celsius) => (celsius * 9) / 5 + 32;

function verificar() {
    let select = document.getElementById('cards');
    let valor = select.value;
    let elementoEntrada = document.getElementById('comparacao');
    let valorInput = parseFloat(elementoEntrada.value) || 0;
    let resultado = '';

    if (valor === '1') {
        resultado += `Celsius para Kelvin: ${valorInput + VAR_KELVIN}\n`;
        resultado += `Celsius para Fahrenheit: ${CELSIUS_TO_FAHRENHEIT(valorInput)}\n`;
    }
    if (valor === '2') {
        resultado += `Fahrenheit para Kelvin: ${((valorInput - 32) * 5) / 9 + VAR_KELVIN}\n`;
        resultado += `Fahrenheit para Celsius: ${FAHRENHEIT_TO_CELSIUS(valorInput)}\n`;
    }
    if (valor === '3') {
        resultado += `Kelvin para Celsius: ${valorInput - VAR_KELVIN.toFixed(2)}\n`;
        resultado += `Kelvin para Fahrenheit: ${valorInput * KELVIN_TO_FAHRENHEIT - (459.67).toFixed(2)}\n`;
    }
    console.log(resultado);
    adicionarResultado(resultado.toString());
}
function adicionarResultado(texto) {
    let resultadoDiv = document.getElementById('resultado');
    let novoElemento = document.createElement('p'); // Cria um novo <p>
    novoElemento.innerHTML = texto.replace(/\n/g, '<br>'); // Substitui \n por <br>
    resultadoDiv.appendChild(novoElemento); // Insere o novo <p> na div
}
