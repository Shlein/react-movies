import React, {useState} from "react";
import TemperatureInput from "../TemperatureInput/TemperatureInput";
import {toCelsius, toFahrenheit, tryConvert} from "../../servises/temperature.servise";

const TemperatureTable = () => {
	const [temperature, setTemperature] = useState({scale: 'c', degree: ''});

	function handleFahrenheitChange(degree) {
		setTemperature({scale: 'f', degree});
	}

	function handleCelsiusChange(degree) {
		setTemperature({scale: 'c', degree});
	}

	const celsius = temperature.scale === 'c' ? temperature.degree : tryConvert(temperature.degree, toCelsius)
	const fahrenheit = temperature.scale === 'f' ? temperature.degree : tryConvert(temperature.degree, toFahrenheit)

	return (
		<div>
			<h2>Конвертация температуры</h2>

			<p>Температура по цельсию</p>
			<TemperatureInput
				scale='c'
				value={celsius}
				onChangeTemperature={handleCelsiusChange}
				placeholder='Введите температуру'
				type='number'
			/>

			<p>Температура по фаренгейту</p>
			<TemperatureInput
				scale='f'
				value={fahrenheit}
				onChangeTemperature={handleFahrenheitChange}
				placeholder='Введите температуру'
				type='number'
			/>
		</div>
	);
};

export default TemperatureTable;