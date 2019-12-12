// action types
import {
  FETCH_CURRENCY_RATES,
  FETCH_CURRENCY_RATES_SUCCESS,
  FETCH_CURRENCY_NAMES,
  FETCH_CURRENCY_NAMES_SUCCESS,
} from './actionTypes';


// action creators

export function fetchCurrencyRates() {
  return {
    type: FETCH_CURRENCY_RATES,
  };
}

export function fetchCurrencyRatesSuccess(currencyRates) {
  return {
    type: FETCH_CURRENCY_RATES_SUCCESS,
    currencyRates,
  };
}

export function fetchCurrencyNames() {
  return {
    type: FETCH_CURRENCY_NAMES,
  };
}

export function fetchCurrencyNamesSuccess(currencyNames) {
  return {
    type: FETCH_CURRENCY_NAMES_SUCCESS,
    currencyNames,
  };
}
