
import * as action from './actions';

const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;

const currencyRatesPath = `http://www.apilayer.net/api/live?access_key=${API_KEY}&format=1`;
const currencyNamesPath = `http://www.apilayer.net/api/list?access_key=${API_KEY}&format=1`;

export const getCurrencyRates = () => {
  return async (dispatch) => {
    await dispatch(action.fetchCurrencyRates());

    return fetch(currencyRatesPath, { method: 'GET' })
      .then((response) => { 
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(
        (json) => {
          dispatch(action.fetchCurrencyRatesSuccess(json.quotes));
        },
        (error) => alert(error.message)
      );
  };
};

export const getCurrencyNames = () => {
  console.log('getCurrencyNames called!');
  return async (dispatch) => {
    await dispatch(action.fetchCurrencyNames())
    return fetch(currencyNamesPath, { method: 'GET' })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(
        (json) => {
          dispatch(action.fetchCurrencyNamesSuccess(json));
        },
        (error) => alert(error.message),
      );
  };
};
