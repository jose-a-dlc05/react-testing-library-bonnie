import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
	return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
	// Create two useState hooks
	// buttonColor
	// disabled
	const [buttonColor, setButtonColor] = useState('red');
	const [disabled, setDisabled] = useState(false);
	// Create a new variable called newButtonColor which toggles between colors "MediumVioletRed" or "MidnightBlue" when button is clicked
	const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
	// Create a checkbox which disables or enables the button
	// Create a helper function called "replaceCamelWithSpaces" that takes the colorName argument and returns the color name with spaces before the capital letter
	// Use regex: (/\B([A-Z])\B/g, ' $1')

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
				checked={disabled}
				aria-checked={disabled}
				onChange={(e) => setDisabled(e.target.checked)}
			/>
			<label htmlFor={'disabled-button-checkbox'}>Disable Button</label>
		</div>
	);
}

export default App;
