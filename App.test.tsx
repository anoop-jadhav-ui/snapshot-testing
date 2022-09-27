import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  it('should match the snapshot', () => {
    const { toJSON } = render(<App />);

    expect(toJSON).toMatchSnapshot();
  });
});
