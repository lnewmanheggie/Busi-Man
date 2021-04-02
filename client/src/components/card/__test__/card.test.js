import React from 'react';
import Card from '../Card';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<Card />', () => {

    it('renders without crashing', () => {
        render(<Card />);
    });

    it('props work', () => {
        const { getByTestId } = render(<Card title='cardTitle' icon={<svg></svg>} />);

        const card = getByTestId('card');

        expect(card).toHaveTextContent(/cardtitle/i);
        
        // how to check for the existence of an svg element?
    })
})
