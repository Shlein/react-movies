import React, {useState} from "react";

const Clicker = () => {
	const [count, setCount] = useState(0)

	const handleMinus = () => {
		setCount(count - 1)
	}

	const handlePlus = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<button onClick={handleMinus}>-</button>
			<p>{count}</p>
			<button onClick={handlePlus}>+</button>
		</div>
	)
}

export default Clicker