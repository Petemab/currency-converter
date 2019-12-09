import initialState from "./initialState";
import * as types from '../actions/actionTypes';


export default function currency(state = initialState, action) {
      switch (action.type) {
        case types.FETCH_CURRENCY_RATES:
          return {
            ...state,
            isFetchingCurrencyRates: true
          };
        case types.FETCH_CURRENCY_RATES_SUCCESS:
          return {
            ...state,
            isFetchingCurrencyRates: false,
            currencyRates: action.payload.currencyRates,
          };
        case types.FETCH_CURRENCY_NAMES:
          return {
            ...state,
            isFetchingCurrencyNames: true
          };
        case types.FETCH_CURRENCY_NAMES_SUCCESS:
          return {
            ...state,
            isFetchingCurrencyNames: false,
            currencyNames: action.payload.currencyNames,
          };
        default:
          return state;
      };
}