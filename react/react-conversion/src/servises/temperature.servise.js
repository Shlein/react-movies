export function toCelsius(temperature) {
	return (temperature - 32) * 5/9
}

export function toFahrenheit(temperature) {
	return temperature * 9/5 + 32
}

export function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(temperature)) {
		return null
	}
	const output = convert(input);
	// const rounded = Math.round(output * 1000) / 1000;
	return output.toString()
}