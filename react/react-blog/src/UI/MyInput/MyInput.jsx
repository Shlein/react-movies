import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {

	return (
		<input
			className={classes.input}
			ref={ref}
			{...props}
		>

		</input>
	);
})

export default MyInput;