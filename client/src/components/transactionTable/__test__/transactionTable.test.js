import React from 'react';
import TransactionTable from '../TransactionTable';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);


describe ('<TransactionTable />', () => {

    it('renders without crashing', () => {
        render(<TransactionTable />)
    });
    
})