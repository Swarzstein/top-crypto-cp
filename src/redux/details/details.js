const SHOW_DETAILS = 'top-cripto-cp/currencies/SHOW_DETAILS';

export default function detailsReducer(state = [], action) {
  switch (action.type) {
    case SHOW_DETAILS: {
      localStorage.setItem('crypto', JSON.stringify(action.currency));
      return action.currency;
    }
    default: return state;
  }
}

export const showDetails = (currency) => async (dispatch) => {
  dispatch({
    type: SHOW_DETAILS,
    currency,
  });
};
