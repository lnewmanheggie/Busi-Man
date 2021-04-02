import React from 'react';
import Button from '../Button';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<Button />', () => {
    
    it("renders without crashing", () => {
        render(<Button />);
    })

    it('props work', () => {
        let clicked = false;

        const { getByTestId } = render(<Button name="button" type="submit" handleClick={() => clicked = true}/>);

        const button = getByTestId('button');

        expect(button).toHaveTextContent(/button/i)

        fireEvent.click(button);
        expect(clicked).toBe(true);

        expect(button).toHaveAttribute('type', 'submit');
        
    })

    it('props work with mock function', () => {
        let click = jest.fn();

        const { getByTestId } = render(<Button handleClick={click}/>);

        const button = getByTestId('button');

        fireEvent.click(button);
        expect(click);
    })    
})

// it("renders button correctly", () => {
//     const {getByTestId} = render(<Button name="button" type="submit"></Button>)
//     const button = getByTestId('button');
//     expect(button).toHaveTextContent('button')
//     expect(button).toHaveAttribute('type', 'submit')
// })

// //snapshot testing
// it('matches shapshot', () => {
//     const tree = renderer.create(<Button name="button"></Button>).toJSON();
//     expect(tree).toMatchSnapshot();
// })