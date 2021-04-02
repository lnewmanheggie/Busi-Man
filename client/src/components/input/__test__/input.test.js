import React from 'react';
import Input from '../Input';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<Input />', () => {
    
    it("renders without crashing", () => {
        render(<Input />);
    })

    it('props work', () => {
        let fxn = jest.fn();

        const { getByTestId } = render(
            <Input 
                type='submit'
                placeholder='placeholder'
                name='name'
                value='value'
                onChange={fxn}
                id='id'
                // ref = ?
            />);

        const input = getByTestId('input');

        expect(input).toHaveAttribute('name', 'name')
        expect(input).toHaveAttribute('type', 'submit')
        expect(input).toHaveAttribute('value', 'value')
        expect(input).toHaveAttribute('placeholder', 'placeholder')
        expect(input).toHaveAttribute('id', 'id')

        fireEvent.click(input);
        expect(fxn);
    })

})