const Lists = require('./');
import {render, screen} from '@testing-library/react';


test('adds 1 + 2 to equal 3', () => {

    render(<Lists/>);

    expect(1+2).toBe(3);
    
});