import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AnnouncementsBox from '../AnnouncementsBox';

afterEach(cleanup);

describe('<AnnouncementsBox />', () => {
    it('renders without crashing', () => {
        render(<AnnouncementsBox />);
    });

    it('props work', () => {
        const { getByTestId } = render(<AnnouncementsBox name='name' date='March 12, 2020' post='post' />)

        const announcements = getByTestId('announcements');

        expect(announcements).toHaveTextContent(/name/i)
        expect(announcements).toHaveTextContent(/March 12, 2020/i)
        expect(announcements).toHaveTextContent(/post/i)

        // display.getByText(/name/);
        // display.getByText(/March 12, 2020/);
        // display.getByText(/post/);
    });
})