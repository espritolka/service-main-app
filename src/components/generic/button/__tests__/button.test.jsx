import React from 'react';
import ReactDOM from 'react-dom';
import ButtonMain from '../button';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('should be render with props', () => {
 const { getByTestId } = render(<ButtonMain >SAVE</ButtonMain>)

// fireEvent.click(screen.getByText('SAVE'))

 expect(getByTestId('button')).toHaveTextContent('SAVE')
});

it('should be render without props', () => {
    
    const { getByTestId } = render(<ButtonMain/>)

    expect(getByTestId('button')).toHaveTextContent('Button')
   })