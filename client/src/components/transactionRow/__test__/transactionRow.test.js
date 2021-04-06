import React from 'react';
import TransactionRow from '../TransactionRow';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);


describe ('<TransactionRow />', () => {

    it('renders without crashing', () => {
        render(<TransactionRow />)
    });
    
    it('props work', () => {

        const { getByTestId } = render(<TransactionRow barcode='12345' name='name' count='5' price='1.99' date='20190907' employee='employee'/>)

        const barcode = getByTestId('barcode');
        const name = getByTestId('name');
        const count = getByTestId('count');
        const price = getByTestId('price');
        const employee = getByTestId('employee');
        const date = getByTestId('date');

        expect(barcode).toHaveTextContent(/12345/i);
        expect(name).toHaveTextContent(/name/i);    
        expect(count).toHaveTextContent(/5/i);
        expect(price).toHaveTextContent(/1.99/i);
        expect(date).toHaveTextContent(/Sep 7th 2019/i);
        expect(employee).toHaveTextContent(/employee/i);
    })
    
})