// Test away
import React from 'react';
import { render, Component } from '@testing-library/react';

import Dashboard from './Dashboard';
import Display from '../display/Display'
import Controls from '../controls/Controls'

test('renders Dashboard', () => {
	render(<Dashboard />);
});

// const component = <Dashboard />

test('shows display', () => {
        expect(render(<Display />)).toMatchSnapshot();
		// expect(component.contains(<Display />)).toBe(true);
});

test('shows controls', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});