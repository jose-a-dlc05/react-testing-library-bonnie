import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button turns blue when clicked', () => {
	// arrange
	// render app and get the button by role
	render(<App />);
	const colorChanger = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorChanger).toHaveStyle({ backgroundColor: 'red' });
	// act
	// click button
	fireEvent.click(colorChanger);
	// assert
	// expect the backround color to be blue
	expect(colorChanger).toHaveStyle({ backgroundColor: 'blue' });
	// expect the button text to be 'Change to red'
	expect(colorChanger.textContent).toBe('Change to red');
});

test('checkbox disables button', () => {
	render(<App />);
	const colorChanger = screen.getByRole('button', { name: 'Change to blue' });
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
	const colorChanger = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorChanger).toBeEnabled();

	// check that the checkbox starts out unchecked
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});
