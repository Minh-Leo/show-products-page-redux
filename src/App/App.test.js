import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { render } from '@testing-library/react';
import App from './App';

test('renders App header and footer', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const headerElement = getByText(/Records Albums Shop/i);
  expect(headerElement).toBeInTheDocument();
  const footerElement = getByText(/Copyright/i);
  expect(footerElement).toBeInTheDocument();
});
