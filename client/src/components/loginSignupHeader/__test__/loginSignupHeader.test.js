import React from 'react';
import LoginSignupHeader from '../LoginSignupHeader';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

describe('<LoginSignupHeader />', () => {

    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <LoginSignupHeader />
            </BrowserRouter>
        );
    })
})