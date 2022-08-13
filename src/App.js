import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
	return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
	const [buttonColor, setButtonColor] = useState('red');
	const [disabled, setDisabled] = useState(false);
	const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
	return (
		<div>
			<button
				disabled={disabled}
				style={{
					backgroundColor: disabled ? 'gray' : buttonColor,
					color: 'white',
				}}
				onClick={() => setButtonColor(newButtonColor)}
			>
				Change to {newButtonColor}
			</button>
			<input
				type='checkbox'
				id='disable-button-checkbox'
				defaultChecked={disabled}
				aria-checked={disabled}
				onChange={(e) => setDisabled(e.target.checked)}
			/>
			<label htmlFor='disable-button-checkbox'>Disable button</label>
		</div>
	);
}

export default App;
