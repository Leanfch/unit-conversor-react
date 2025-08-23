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

function App() {
	const [unit1, setUnit1] = useState(data[0]);
	const [unit2, setUnit2] = useState(data[1]);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		setUnit1(data.find((item) => item.name === event.target.value) ?? data[0]);
	}

	function handleChange2(event: ChangeEvent<HTMLSelectElement>) {
		setUnit2(data.find((item) => item.name === event.target.value) ?? data[0]);
	}

    function handleChangeValue1(event: ChangeEvent<HTMLInputElement>) {
		setValue1(Number(event.target.value))
    }

    function handleChangeValue2(event: ChangeEvent<HTMLInputElement>) {
		setValue2(Number(event.target.value))
    }

	return (
		<section className="bg-teal-950 w-screen h-screen flex flex-col items-center justify-center">
			<p className="text-gray-100 font-bold text-6xl">
				Conversor temperatura
			</p>
			<article className="text-gray-100 m-5">
				<section className="border-2 border-gray-900 rounded-md p-3 flex flex-col">
					<div className="mb-5">
						<select
							name="temp"
							id="temp"
							className="bg-gray-900 p-1 rounded-md pr-5"
							value={unit1.name}
							onChange={handleChange}
						>
							{data.map((unit) => {
								return (
									<option value={unit.name} key={unit.id}>
										{unit.name}
									</option>
								);
							})}
						</select>
						<input
							type="number"
							placeholder="0"
                            value={value1}
                            onChange={handleChangeValue1}
							className="bg-gray-100 text-gray-800 placeholder:text-gray-600 p-2 rounded-md ml-5 mr-2"
						/>
						<span>{unit1.unit}</span>
					</div>
					<div>
						<select
							name="temp"
							id="temp"
							className="bg-gray-900 p-1 rounded-md pr-5"
							value={unit2.name}
							onChange={handleChange2}
						>
							{data.map((unit) => {
								return (
									<option value={unit.name} key={unit.id}>
										{unit.name}
									</option>
								);
							})}
						</select>
						<input
							type="number"
							placeholder="0"
                            value={value2}
                            onChange={handleChangeValue2}
							className="bg-gray-100 text-gray-800 placeholder:text-gray-600 p-2 rounded-md ml-5 mr-2"
						/>
						<span>{unit2.unit}</span>
					</div>
				</section>
			</article>
		</section>
	);
}

export default App;
