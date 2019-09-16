// Test away!
import React from 'react';
import { render, Component } from '@testing-library/react';
import { toContain } from '@testing-library/jest-dom';

import Display from './Display';

test('if unlocked',() => {
    expect(Display.defaultProps.locked).toEqual(false)
})

test('if open', () => {
    expect(Display.defaultProps.closed).toEqual(false)
})

describe('right results', () => {
    describe('proper colors', () => {
        it('displayed, green', () => {
            const display = render(<Display closed={false} locked={false}/>)
            display.getByText('Open')
            display.getByText('Unlocked')

            expect(display.getByText('Open').className).toContain('green-led')
        })
    })
})