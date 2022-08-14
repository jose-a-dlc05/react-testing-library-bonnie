import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button turns blue when clicked', () => {
	// arrange
	// render app and get the button by role
	// act
	// click button
	// assert
	// expect the backround color to be blue
	// expect the button text to be 'Change to red'
});

test('button turns gray when disabled', () => {});

test('initial condition', () => {
	// check that the button starts out enabled
	// check that the checkbox starts out unchecked
});

describe('spaces before camel-case capital letters', () => {
	test('Works for no inner capital letters', () => {});
	test('Works for one inner capital letter', () => {});
	test('Works for multiple inner capital letters', () => {});
});
