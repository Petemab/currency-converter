import initialState from './initialState';
import {
  FETCH_CURRENCY_RATES,
  FETCH_CURRENCY_RATES_SUCCESS,
  FETCH_CURRENCY_NAMES,
  FETCH_CURRENCY_NAMES_SUCCESS,
} from '../actions/actionTypes';


function currency(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENCY_RATES:
      return {
        ...state,
        isFetchingCurrencyRates: true,
      };
    case FETCH_CURRENCY_RATES_SUCCESS:
      return {
        ...state,
        isFetchingCurrencyRates: false,
        currencyRates: action.currencyRates,
      };
    case FETCH_CURRENCY_NAMES:
      return {
        ...state,
        isFetchingCurrencyNames: true,
      };
    case FETCH_CURRENCY_NAMES_SUCCESS:
      return {
        ...state,
        isFetchingCurrencyNames: false,
        currencyNames: action.currencyNames.currencies,
      };
    default:
      return state;
  }
}

export default currency;
