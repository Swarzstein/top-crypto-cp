import currenciesReducer from '../redux/currencies/currencies';
import getCurrenciesMock from '../utils/cryptoAPIMock';

test('updating state', () => {
  const GET_CURRENCIES = 'top-cripto-cp/currencies/GET_CURRENCIES';
  const currencies = getCurrenciesMock();
  const state = currenciesReducer([], {
    type: GET_CURRENCIES,
    currencies,
  });
  expect(state).toEqual(currencies.data);
});
