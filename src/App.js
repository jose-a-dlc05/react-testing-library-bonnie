import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
	return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
	// Create two useState hooks
	// buttonColor
	// disabled
	// Create a new variable called newButtonColor which toggles between colors "MediumVioletRed" or "MidnightBlue" when button is clicked
	// Create a checkbox which disables or enables the button
	// Create a helper function called "replaceCamelWithSpaces" that takes the colorName argument and returns the color name with spaces before the capital letter
	// Use regex: (/\B([A-Z])\B/g, ' $1')

	return <div></div>;
}

export default App;
