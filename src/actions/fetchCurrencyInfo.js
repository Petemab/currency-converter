
import { 
  fetchCurrencyNames, 
  fetchCurrencyRates, 
  fetchCurrencyNamesSuccess, 
  fetchCurrencyRatesSuccess
} from "./actions";

// console.log(fetchCurrencyRates());
// console.log(fetchCurrencyNames());
// console.log(fetchCurrencyNamesSuccess());
// console.log(fetchCurrencyRatesSuccess());


const API_KEY = process.env.REACT_APP_CURRENCY_API_KEY;

const currencyRatesPath = `http://www.apilayer.net/api/live?access_key=${API_KEY}&format=1`;
const currencyNamesPath = `http://www.apilayer.net/api/list?access_key=${API_KEY}`;

// function fetchCurrencyRatesSuccess(currencyRates) {
//   return {
//     type: types.FETCH_CURRENCY_RATES_SUCCESS,
//     payload: currencyRates
//   };
// }

// function dispatchCurrencyRates() {
//   console.log('hit dispatch function');
//   return dispatch => {
//     console.log('number 2');
//     dispatch(fetchCurrencyRates());
//   };
// }

export const getCurrencyRates = () => {
    console.log("getCurrencyRates called!");
    return function (dispatch)
    {
    dispatch({ type: "FETCH_CURRENCY_RATES" });
      fetch(currencyRatesPath, {
      method: "GET"
      })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(json => dispatch({ type: "FETCH_CURRENCY_RATES_SUCCESS", payload: json }))
    .catch(error => alert(error.message))
}
}



// function fetchCurrencyNamesSuccess(currencyNames) {
//   return {
//     type: types.FETCH_CURRENCY_NAMES_SUCCESS,
//     payload: currencyNames
//   };
// }

export const getCurrencyNames = () => {
  console.log("getCurrencyNames called!");
    return function (dispatch) {
        dispatch(fetchCurrencyNames())
        fetch(currencyNamesPath, {
            method: 'GET'
        })
       .then(response => response.json())
      .then(json => console.log(json))
      .then(json => dispatch(fetchCurrencyNamesSuccess(json)))
      .catch(error => alert(error.message))
    }
}

