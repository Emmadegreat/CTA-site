import '@testing-library/jest-dom'

import {render, screen} from '@testing-library/react'

import Sample from '../pages/sample'

test('render sample component', () => {
    render(<Sample/>);
    const headingElement = screen.getByText('heading two');
    expect(headingElement).toBeInTheDocument();
});