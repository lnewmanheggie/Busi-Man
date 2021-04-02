import React from 'react';
import EmployeeTable from '../EmployeeTable';
import { render, cleanup  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<EmployeeTable />', () => {

    it("renders without crashing", () => {
        render(<EmployeeTable />);
    })
})