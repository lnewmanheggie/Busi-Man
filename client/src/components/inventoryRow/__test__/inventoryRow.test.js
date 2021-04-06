import React from 'react';
import InventoryRow from '../InventoryRow';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);


describe ('<InventoryRow />', () => {

    it('renders without crashing', () => {
        render(<InventoryRow />)
    });

    
    it('props work', () => {


        const { getByTestId } = render(<InventoryRow barcode='barcode' name='name' count='count' price='1.99' />)

        const barcode = getByTestId('barcode');
        const name = getByTestId('name');
        const count = getByTestId('count');
        const price = getByTestId('price');

        expect(barcode).toHaveTextContent(/barcode/i);
        expect(name).toHaveTextContent(/name/i);    
        expect(count).toHaveTextContent(/count/i);
        expect(price).toHaveTextContent(/1.99/i);
    })
    
})