import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('initial condition', () => {
	// check that the button starts out enabled
	render(<App />);
	const enabledButton = screen.getByRole('button', { name: 'Change to blue' });
	expect(enabledButton).toBeEnabled();
	// check that the checkbox starts out unchecked
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});
test('button turns blue when clicked', () => {
	// arrange
	// render app and get the button by role
	render(<App />);
	const coloredButton = screen.getByRole('button', { name: 'Change to blue' });
	expect(coloredButton).toHaveStyle({ backgroundColor: 'red' });
	// act
	// click button
	fireEvent.click(coloredButton);
	// assert
	// expect the backround color to be blue
	expect(coloredButton).toHaveStyle({ backgroundColor: 'blue' });
	// expect the button text to be 'Change to red'
	expect(coloredButton.textContent).toBe('Change to red');
});

test('button turns gray when disabled', () => {
	render(<App />);
	const coloredButton = screen.getByRole('button', { name: 'Change to blue' });
	const checkbox = screen.getByRole('checkbox');
	expect(coloredButton).toHaveStyle({ backgroundColor: 'red' });

	fireEvent.click(checkbox);

	expect(coloredButton).toHaveStyle({ backgroundColor: 'gray' });
	expect(checkbox).toBeChecked();
});

describe('spaces before camel-case capital letters', () => {
	test('Works for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red');
	});
	test('Works for one inner capital letter', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});
	test('Works for multiple inner capital letters', () => {
		expect(replaceCamelWithSpaces('MidnightVioletRed')).toBe(
			'Midnight Violet Red'
		);
	});
});
