function App() {
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
						>
							<option value="celsius">Celsius</option>
							<option value="fahrenheite">Fahrenheite</option>
							<option value="kelvin">Kelvin</option>
						</select>
						<input
							type="number"
							placeholder="0"
							className="bg-gray-100 text-gray-800 placeholder:text-gray-600 p-2 rounded-md mx-5"
						/>
                        <span>° C </span>{ /* DEBE SER DINAMICO */}
					</div>
					<div>
						<select
							name="temp"
							id="temp"
							className="bg-gray-900 p-1 rounded-md pr-5"
                            >
							<option value="fahrenheite">Fahrenheite</option>
							<option value="celsius">Celsius</option>
							<option value="kelvin">Kelvin</option>
						</select>
						<input
							type="number"
							placeholder="0"
							className="bg-gray-100 text-gray-800 placeholder:text-gray-600 p-2 rounded-md mx-5"
                            />
                        <span>° C </span>{ /* DEBE SER DINAMICO */}
					</div>
				</section>
			</article>
		</section>
	);
}

export default App;
