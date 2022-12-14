import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {

    it('renders', () => {
        render(<ContactForm />);
    });

    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('submitButton')).toHaveTextContent('Submit')
    })
})
