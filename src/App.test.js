import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
	render(<App />);
	const colorChanger = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorChanger).toHaveStyle({ backgroundColor: 'red' });
});
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
