import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button turns blue when clicked', () => {
	// arrange
	// render app and get the button by role
	render(<App />);
	const colorChanger = screen.getByRole('button', {
		name: 'Change to Midnight Blue',
	});
	expect(colorChanger).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
	// act
	// click button
	fireEvent.click(colorChanger);
	// assert
	// expect the backround color to be blue
	expect(colorChanger).toHaveStyle({ backgroundColor: 'MidnightBlue' });
	// expect the button text to be 'Change to red'
	expect(colorChanger.textContent).toBe('Change to Medium Violet Red');
});

test('button turns gray when clicked', () => {
	render(<App />);
	const coloredButton = screen.getByRole('button', {
		name: 'Change to Midnight Blue',
	});
	expect(coloredButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	expect(checkbox).not.toBeChecked();

	fireEvent.click(checkbox);

	expect(checkbox).toBeChecked();
	expect(coloredButton).toHaveStyle({ backgroundColor: 'gray' });

	fireEvent.click(checkbox);

	expect(coloredButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('checkbox disables button', () => {
	render(<App />);
	const colorChanger = screen.getByRole('button', {
		name: 'Change to Midnight Blue',
	});
	expect(colorChanger).toBeEnabled();

	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	expect(checkbox).not.toBeChecked();

	fireEvent.click(checkbox);

	expect(checkbox).toBeChecked();
	expect(colorChanger).toBeDisabled();

	fireEvent.click(checkbox);

	expect(colorChanger).toBeEnabled();
});

test('initial condition', () => {
	render(<App />);
	// check that the button starts out enabled
	const colorChanger = screen.getByRole('button', {
		name: 'Change to Midnight Blue',
	});
	expect(colorChanger).toBeEnabled();

	// check that the checkbox starts out unchecked
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

describe('spaces before camel-case capital letters', () => {
	test('Works for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red');
	});
	test('Works for one inner capital letter', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});
	test('Works for multiple inner capital letters', () => {
		expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
	});
});
