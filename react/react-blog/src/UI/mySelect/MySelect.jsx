import React from 'react';

const MySelect = (props) => {
	return (
		<select
			{...props}
		>
			{props.options.map((option) => {
				return (
					<option
						key={option.value}
						value={option.value}
					>
						{option.text}
					</option>
				)
			})}
		</select>
	);
};

export default MySelect;