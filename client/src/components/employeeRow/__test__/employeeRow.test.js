import React from 'react';
import EmployeeRow from '../EmployeeRow';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);


describe ('<EmployeeRow />', () => {

    it('renders without crashing', () => {
        render(<EmployeeRow />)
    });

    
    it('props work', () => {


        const { getByTestId } = render(<EmployeeRow firstName='firstName' lastName='lastName' company='company' email='email' />)

        const firstName = getByTestId('first-name');
        const lastName = getByTestId('last-name');
        const company = getByTestId('company');
        const email = getByTestId('email');

        expect(firstName).toHaveTextContent(/firstname/i);
        expect(lastName).toHaveTextContent(/lastname/i);    
        expect(company).toHaveTextContent(/company/i);
        expect(email).toHaveTextContent(/email/i);
    })
    
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