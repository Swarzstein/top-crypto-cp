import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencies/currencies';
import detailsReducer from './details/details';

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    details: detailsReducer,
  },
});

export default store;
