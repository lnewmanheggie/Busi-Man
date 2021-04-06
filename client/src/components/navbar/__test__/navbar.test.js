import React from 'react';
import Navbar from '../Navbar';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('<Navbar />', () => {

    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
    })
})