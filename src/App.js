import { useState } from 'react';

const App = () => {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("")

		// our operators values
	const ops = ['/', '*', '+', '-', '.'];

		// 
	const updateCalc = value => {
		if (
			ops.includes(value) && calc === '' || 
			ops.includes(value) && ops.includes(calc.slice(-1)
			)
		) {
			return;
		}

		setCalc(calc + value);

		if (!ops.includes(value)) {
			console.log(value)
			console.log(calc)
			// setResult(eval(calc + value).toString());
		}
	}

	const createDigits = () => {
		// we will store our numbers from 1-9 in this array
		const digits = [];

		for (let i=1; i < 10; i++) {
			digits.push(
				<button 
					onClick={() => updateCalc(i.toString())} 
					key={i}>
					{i}
				</button>
			)
		}

		return digits;
	}

	const calculate = () => {
		setCalc(eval(calc).toString());
	}

	const deleteLast = () => {
		if (calc == '') {
			return;
		}

		const value = calc.slice(0, -1);

		setCalc(value);
	}

	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					{/* span will show a result before pressing the equal button */}
					{/* if there is value will show it if there is no value we won't show it */}
					{result ? <span>({result})</span> : ''}
					{calc || "0"}
				</div>

				<div className="operators">
					{/* click arrow function that will do math functions  */}
					<button onClick={() => updateCalc('/')}>/</button>
					<button onClick={() => updateCalc('*')}>*</button>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>

					<button onClick={deleteLast}>DEL</button>
				</div>

				<div className="digits">
					{/* we run the function to get our digits */}
					{ createDigits() }
					<button onClick={() => updateCalc('0')}>0</button>
					<button onClick={() => updateCalc('.')}>.</button>

					<button onClick={calculate}>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
