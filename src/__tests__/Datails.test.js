import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Details from '../pages/Details';
import currenciesReducerMock from '../utils/mockCurrenciesReducer';

describe('Details test', () => {
  const store = configureStore({
    reducer: {
      currencies: currenciesReducerMock,
    },
  });

  it('Details page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/bitcoin']}>
            <Routes>
              <Route path="/:id" element={<Details />} />
            </Routes>
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders App', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/bitcoin']}>
          <Routes>
            <Route path="/:id" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    const linkElement = screen.getByText('Bitcoin');
    expect(linkElement).toBeInTheDocument();
  });
});
