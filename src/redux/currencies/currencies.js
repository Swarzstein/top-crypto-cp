import getCurrencies from '../../api/cryptoAPI';

const GET_CURRENCIES = 'top-cripto-cp/currencies/GET_CURRENCIES';

export default function currenciesReducer(state = [], action) {
  switch (action.type) {
    case GET_CURRENCIES: {
      console.log(action.currencies.data);
      return action.currencies.data;
    }
    default: return state;
  }
}

export const getCrypto = () => async (dispatch) => {
  let currencies = await getCurrencies();
  currencies = JSON.parse(currencies);
  dispatch({
    type: GET_CURRENCIES,
    currencies,
  });
};
