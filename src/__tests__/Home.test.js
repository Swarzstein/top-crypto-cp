import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import currenciesReducerMock from '../utils/mockCurrenciesReducer';

describe('Currency component', () => {
  const store = configureStore({
    reducer: {
      currencies: currenciesReducerMock,
    },
  });

  it('Currency box renders', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
