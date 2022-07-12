import React from 'react';

const TemperatureInput = (props) => {
	return (
		<>
			<input
				onChange={(e) => props.onChangeTemperature(e.target.value)}
				value={props.value}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</>
	);
};

export default TemperatureInput;