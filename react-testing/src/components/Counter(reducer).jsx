import React, {useReducer} from 'react';

const initialState = {count: 0}

function reducer (state, action) {
	switch (action.type) {
		case ('decrement'):
			return {count: state.count - 1}
		case ('increment'):
			return {count: state.count + 1}
		default:
			return state
	}
}

const Counter = () => {

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<h1>Counter</h1>
			<button onClick={() => dispatch({type: 'decrement'})}>-</button>
			{state.count}
			<button onClick={() => dispatch({type: 'increment'})}>+</button>
		</div>
	)
}

export default Counter

