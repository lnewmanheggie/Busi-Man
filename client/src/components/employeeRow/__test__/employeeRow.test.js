import React from 'react';
import EmployeeRow from '../EmployeeRow';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { get } from 'mongoose';

afterEach(cleanup);


describe ('<EmployeeRow />', () => {

    it('renders without crashing', () => {
        render(<EmployeeRow />)
    });

    
    it('props work', () => {

        let click = jest.fn();

        const { getByTestId } = render(<EmployeeRow firstName='firstName' lastName='lastName' company='company' email='email' onClick={click} />)

        const employeeRow = getByTestId('employee-row');

        expect(employeeRow).toHaveTextContent(/firstname/i);
        expect(employeeRow).toHaveTextContent(/lastname/i);    
        expect(employeeRow).toHaveTextContent(/company/i);
        expect(employeeRow).toHaveTextContent(/email/i);

        // click event works
        fireEvent.click(employeeRow);
        expect(click);
    })

    // it('contains the correct elements', () => {

    //     const { getByTestId } = render(<EmployeeRow />)

    //     const employeeRow = getByTestId('employee-row');
    //     const firstName = getByTestId('first-name');
    //     const lastName = getByTestId('last-name');
    //     const company = getByTestId('company');
    //     const email = getByTestId('email');
    //     const button = getByTestId('button-render');

    //     expect(employeeRow).toContainElement(firstName);
    //     expect(employeeRow).toContainElement(lastName);
    //     expect(employeeRow).toContainElement(company);
    //     expect(employeeRow).toContainElement(email);
    //     expect(employeeRow).toContainElement(button);
    // })
    
})