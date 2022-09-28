import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  it('should match the snapshot', () => {
    const renderResult = render(<App />);
    expect(renderResult.container).toMatchSnapshot();
  });

  // it('should match the snapshot when a todo item is added', () => {
  //   const renderResult = render(<App />);
  //   const inputElement = renderResult.getByTestId('input');
  //   const addButton = renderResult.getByText('Add');
  //   fireEvent.change(inputElement, { target: { value : "Todo Item 1"}});
  //   fireEvent.click(addButton);
  //   expect(renderResult.container).toMatchSnapshot();
  // });

  it('should add a todo item when clicked on add', () => {
    const renderResult = render(<App />);
    const inputElement = renderResult.getByTestId('input');
    const addButton = renderResult.getByText('Add');
    fireEvent.change(inputElement, { target: { value : "Todo Item 1"}});
    fireEvent.click(addButton);
    expect(renderResult.getByText("Todo Item 1"));
  });
  
  it('should clear all todos when clicked on clear', () => {
    const renderResult = render(<App />);
    const inputElement = renderResult.getByTestId('input');
    const addButton = renderResult.getByText('Add');
    const clearButton = renderResult.getByText('Clear');
    fireEvent.change(inputElement, { target: { value: "Todo Item 1" } });
    fireEvent.click(addButton);

    fireEvent.click(clearButton)
    expect(renderResult.queryByText("Todo Item 1")).toBeEmptyDOMElement;
  });
});
