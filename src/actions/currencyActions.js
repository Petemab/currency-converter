
import * as types from "./actionTypes";

const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;

const currencyRatesPath = `http://www.apilayer.net/api/live?access_key=${API_KEY}&format=1`;
const currencyNamesPath = `http://www.apilayer.net/api/list?access_key=${API_KEY}`;

function fetchCurrencyRatesSuccess(currencyRates) {
  return {
    type: types.FETCH_CURRENCY_RATES_SUCCESS,
    payload: currencyRates
  };
}

export function fetchCurrencyRates() {
    return dispatch => {
        dispatch({ type: types.FETCH_CURRENCY_RATES })
    return fetch(currencyRatesPath, {
    method: "GET"
    })
  .then(response => response.json())
  .then(json => console.log(json))
  .then(json => dispatch(fetchCurrencyRatesSuccess(json)))
  .catch(error => alert(error.message))
 }
}

function fetchCurrencyNamesSuccess(currencyNames) {
  return {
    type: types.FETCH_CURRENCY_NAMES_SUCCESS,
    payload: currencyNames
  };
}

export function fetchCurrencyNames() {
    return dispatch => {
        dispatch({ type: types.FETCH_CURRENCY_NAMES })
        return fetch(currencyNamesPath, {
            method: 'GET'
        })
       .then(response => response.json())
      .then(json => console.log(json))
      .then(json => dispatch(fetchCurrencyNamesSuccess(json)))
      .catch(error => alert(error.message))
    }
}

