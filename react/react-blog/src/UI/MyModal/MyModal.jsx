import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, isVisible, setVisible}) => {

	const cls = [classes.modal];

	if (isVisible) {
		cls.push(classes.visible)
	}

	return (
		<div
			className={cls.join(' ')}
			onClick={() => setVisible(false)}
		>
			<div
				className={classes.modal__content}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default MyModal;