import React from 'react';
import Footer from '../Footer';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<Footer />', () => {

    it("renders without crashing", () => {
        render(<Footer />);
    })
})