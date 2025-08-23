function celsiusToFahrenheit ( C : number ) {
    return (C * 9/5) + 32;
}

function fahrenheitToCelsius( F: number ) {
    return (F - 32) * 5/9;
}

function celsiusToKelvin ( C: number ) {
    return C + 273.15;
}

function kelvinToCelsius ( K: number ) {
    return K - 273.15;
}

function unitConverter( value: number, fromUnit: string, toUnit: string ) {
    let resultInCelsius: number;
    let result: number;
    
    switch (fromUnit) {
        case 'fahrenheit':
            resultInCelsius = fahrenheitToCelsius(value);
        break
        case 'kelvin':
            resultInCelsius = kelvinToCelsius(value);
        break
        default:
            resultInCelsius = value;
    }

    switch (toUnit) {
        case 'fahrenheit':
             result = celsiusToFahrenheit(resultInCelsius)
        break;
        case 'kelvin':
            result = celsiusToKelvin(resultInCelsius)
        break;
        default:
            result = resultInCelsius;
    }

    return result;
}

export { celsiusToFahrenheit, celsiusToKelvin, kelvinToCelsius, fahrenheitToCelsius, unitConverter }