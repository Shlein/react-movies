import React, {useState, useEffect, useRef, useReducer} from "react";

const setDefaultValue = () => {
	const userCount = localStorage.getItem('count')
	return userCount ? +userCount : 0
}

const countReducer = (state, {type}) => {
	switch (type) {
		case 'START':
			return {
				...state,
				isCounting: true
			}
		case 'STOP':
			return {
				...state,
				isCounting: false
			}
		case 'RESET':
			return {
				count: 0,
				isCounting: false
			}
		case 'TICK':
			return {
				...state,
				count: state.count + 1
			}
		default:
			return state
	}
}

const Timer = () => {
	const [{count, isCounting}, dispatch] =  useReducer(countReducer, {count: setDefaultValue(), isCounting: false})

	useEffect(() => {
		localStorage.setItem('count', count)
	}, [count])

	useEffect(() => {
		let timerId = null
		if (isCounting) {
			timerId = setInterval(() => {
				dispatch({type: 'TICK'})
			}, 1000)
		}

		return () => {
			timerId && clearInterval(timerId)
			timerId = null
		}
	}, [isCounting])

	return (
		<div style={{textAlign: 'center'}}>
			<h2>React Timer</h2>
			{count} <br/>
			{
				!isCounting
					? <button style={{marginRight: 20}} onClick={() => dispatch({type: 'START'})}>Start</button>
					: <button style={{marginRight: 20}} onClick={() => dispatch({type: 'STOP'})}>Stop</button>
			}
			<button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
		</div>
	)
}

export default Timer