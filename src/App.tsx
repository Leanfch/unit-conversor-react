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

function App() {
	const [unit1, setUnit1] = useState(data[0]);
	const [unit2, setUnit2] = useState(data[1]);

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		setUnit1(data.find((item) => item.name === event.target.value) ?? data[0]);
	}

	function handleChange2(event: ChangeEvent<HTMLSelectElement>) {
		setUnit2(data.find((item) => item.name === event.target.value) ?? data[0]);
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
							className="bg-gray-100 text-gray-800 placeholder:text-gray-600 p-2 rounded-md mx-5"
						/>
						<span>{unit1.unit}</span>
						{/* DEBE SER DINAMICO */}
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
							className="bg-gray-100 text-gray-800 placeholder:text-gray-600 p-2 rounded-md mx-5"
						/>
						<span>{unit2.unit}</span>
						{/* DEBE SER DINAMICO */}
					</div>
				</section>
			</article>
		</section>
	);
}

export default App;
