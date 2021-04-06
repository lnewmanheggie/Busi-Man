import React from 'react';
import InventoryTable from '../InventoryTable';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);


describe ('<InventoryTable />', () => {

    it('renders without crashing', () => {
        render(<InventoryTable />)
    });
    
})