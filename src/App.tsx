import { useState, type ChangeEvent } from "react";

const data = [
	{
		id: "celsius",
		name: "Celsius",
		unit: "° C",
	},
	{
		id: "fahrenheit",
		name: "Fahrenheit",
		unit: "° F",
	},
	{
		id: "kelvin",
		name: "Kelvin",
		unit: "K",
	},
];

function celsiusToFahrenheit(C: number) {
    return (C * 9/5) + 32;
}

function fahrenheitToCelsius(F: number) {
    return (F - 32) * 5/9;
}

function celsiusToKelvin(C: number) {
    return C + 273.15;
}

function kelvinToCelsius(K: number) {
    return K - 273.15;
}

function unitConverter(value: number, fromUnit: string, toUnit: string) {
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

function App() {
	const [unit1, setUnit1] = useState(data[0]);
	const [unit2, setUnit2] = useState(data[1]);
    const [value1, setValue1] = useState(24);
    const [value2, setValue2] = useState(75.2);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const newUnit = data.find((item) => item.name === event.target.value) ?? data[0];
        setUnit1(newUnit);
        const result = unitConverter(value1, newUnit.id, unit2.id);
        setValue2(Math.round(result * 100) / 100);
    }

    function handleChange2(event: ChangeEvent<HTMLSelectElement>) {
        const newUnit = data.find((item) => item.name === event.target.value) ?? data[0];
        setUnit2(newUnit);
        const result = unitConverter(value1, unit1.id, newUnit.id);
        setValue2(Math.round(result * 100) / 100);
    }

    function handleChangeValue1(event: ChangeEvent<HTMLInputElement>) {
        const newValue = Number(event.target.value);
        setValue1(newValue);
        const result = unitConverter(newValue, unit1.id, unit2.id);
        setValue2(Math.round(result * 100) / 100);
    }

    function handleChangeValue2(event: ChangeEvent<HTMLInputElement>) {
        const newValue = Number(event.target.value);
        setValue2(newValue);
        const result = unitConverter(newValue, unit2.id, unit1.id);
        setValue1(Math.round(result * 100) / 100);
    }

    // Función para generar la fórmula
    function getFormula() {
        const from = unit1.name;
        const to = unit2.name;
        const val = value1;

        if (from === to) return `${val} ${unit1.unit} = ${value2} ${unit2.unit}`;
        
        if (from === "Celsius" && to === "Fahrenheit") {
            return `(${val} °C × 9/5) + 32 = ${value2} °F`;
        }
        if (from === "Fahrenheit" && to === "Celsius") {
            return `(${val} °F - 32) × 5/9 = ${value2} °C`;
        }
        if (from === "Celsius" && to === "Kelvin") {
            return `${val} °C + 273.15 = ${value2} K`;
        }
        if (from === "Kelvin" && to === "Celsius") {
            return `${val} K - 273.15 = ${value2} °C`;
        }
        if (from === "Fahrenheit" && to === "Kelvin") {
            return `(${val} °F - 32) × 5/9 + 273.15 = ${value2} K`;
        }
        if (from === "Kelvin" && to === "Fahrenheit") {
            return `(${val} K - 273.15) × 9/5 + 32 = ${value2} °F`;
        }
        
        return `${val} ${unit1.unit} = ${value2} ${unit2.unit}`;
    }

	return (
		<div className="min-h-screen bg-zinc-800 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header similar a Google */}
                <div className="mb-8">
                    <h1 className="text-2xl text-gray-100 font-normal mb-2">Temperatura</h1>
                </div>

                {/* Contenedor principal */}
                <div className="bg-zing-700 rounded-lg shadow-sm border border-zinc-600 overflow-hidden">
                    <div className="p-6">
                        {/* Conversión principal */}
                        <div className="flex items-center justify-between mb-6">
                            {/* Input 1 */}
                            <div className="flex-1 mr-4">
                                <div className="border border-zinc-600 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                                    <input
                                        type="number"
                                        value={value1}
                                        onChange={handleChangeValue1}
                                        className="w-full px-4 py-3 text-3xl font-light text-gray-100 border-none outline-none bg-transparent"
                                        placeholder="0"
                                    />
                                    <select
                                        value={unit1.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 text-sm text-zinc-100 border-t border-zinc-500 outline-none bg-zinc-600 cursor-pointer hover:bg-zinc-700 focus:bg-zinc-500 focus:ring-2 focus:ring-blue-500"
                                    >
                                        {data.map((unit) => (
                                            <option value={unit.name} key={unit.id}>
                                                {unit.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Símbolo igual */}
                            <div className="flex-shrink-0 mx-4">
                                <span className="text-2xl text-gray-400 font-light">=</span>
                            </div>

                            {/* Input 2 */}
                            <div className="flex-1 mr-4">
                                <div className="border border-zinc-600 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                                    <input
                                        type="number"
                                        value={value2}
                                        onChange={handleChangeValue2}
                                        className="w-full px-4 py-3 text-3xl font-light text-gray-100 border-none outline-none bg-transparent"
                                        placeholder="0"
                                    />
                                    <select
                                        value={unit2.name}
                                        onChange={handleChange2}
                                        className="w-full px-4 py-2 text-sm text-zinc-100 border-t border-zinc-500 outline-none bg-zinc-600 cursor-pointer hover:bg-zinc-700 focus:bg-zinc-500 focus:ring-2 focus:ring-blue-500"
                                    >
                                        {data.map((unit) => (
                                            <option value={unit.name} key={unit.id}>
                                                {unit.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Fórmula */}
                        <div className="pt-4 border-t border-gray-200">
                            <div className="inline-block">
                                <span className="bg-yellow-400 text-yellow-950 text-xs font-medium px-2 py-1 rounded mr-3">
                                    Fórmula
                                </span>
                                <span className="text-sm text-gray-100 font-mono">
                                    {getFormula()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer informativo */}
                <div className="flex justify-between items-center mt-4 text-xs text-gray-100">
                    <span>Más información</span>
                    <span>Comentarios</span>
                </div>
            </div>
        </div>
	);
}

export default App;