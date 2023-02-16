import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencies/currencies';

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export default store;
