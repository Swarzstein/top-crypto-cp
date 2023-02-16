import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../App';
import '@testing-library/jest-dom';
import currenciesReducerMock from '../utils/mockCurrenciesReducer';

test('renders App', () => {
  const store = configureStore({
    reducer: {
      currencies: currenciesReducerMock,
    },
  });

  render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
  const linkElement = screen.getByText('USDT');
  expect(linkElement).toBeInTheDocument();
});
