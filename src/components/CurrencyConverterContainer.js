import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaExchangeAlt } from 'react-icons/fa';
import Select from 'react-select';
import { getCurrencyRates, getCurrencyNames } from "../actions/fetchCurrencyInfo";
// import * as actions from "../actions/actions";

import TitleBar from './TitleBar';

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#2e4265",
    borderColor: "#2e4265",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: "#2e4265"
    }
  }),
  menu: base => ({
    ...base,
    borderRadius: null,
    marginTop: null,
    background: "#2e4265"
  }),
  menuList: base => ({
    ...base,
    padding: 0,
    background: "#2e4265",
    height: 70,
  })
};



const styles = {
  page: {
    backgroundColor: "#142d55",
    height: "100vh"
  },
  containerDiv: {
    marginLeft: "15%",
    marginRight: "15%",
    marginTop: "5%"
  }
};

class CurrencyConverterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightNumberInput: 0,
      leftNumberInput: 0,
    };
  }


  componentWillMount = () => {
    console.log('in comp will mount');
    getCurrencyRates();
    getCurrencyNames();
    // await this.fetchCurrencyRates()
    // await this.fetchCurrencyNames()
  }

  // fetchCurrencyRates = async () => {
  //   await fetch(
  //     `http://www.apilayer.net/api/live?access_key=${API_KEY}&format=1`
  //   )
  //     .then(response => response.json())
  //     .then(rates => console.log(rates))
  //     .catch(error => alert(error.message));
  //   // error handler and loading and dispatch to redux
  // }

  // fetchCurrencyNames = async () => {
  //   await fetch(
  //     `http://www.apilayer.net/api/list?access_key=${API_KEY}`
  //   )
  //     .then(response => response.json())
  //     .then(currencyNames => console.log(currencyNames))
  //     .catch(error => alert(error.message));
  //   // errort handler, loading and dispatch to redux
  // }



  render() {
    console.log(this.props);
    return (
      <div style={styles.page}>
        <div style={styles.containerDiv}>
          <TitleBar title="Currency Converter" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "40%",
                height: "50%",
                marginTop: "20px",
                paddingRight: 20
              }}
            >
              <h3>1 USD = 0.8110 EUR</h3>
              <div
                style={{
                  backgroundColor: "#2e4265",
                  height: "50%",
                  padding: 10
                }}
              >
                <Select styles={customStyles} />
              </div>
              <div
                style={{
                  backgroundColor: "#1d293f",
                  height: "300px",
                  padding: 10
                }}
              >
                <input
                  style={{
                    position: "relative",
                    marginTop: "20%",
                    backgroundColor: "#1d293f",
                    height: 100,
                    color: "#fff0f7",
                    border: "none",
                    fontSize: 50,
                    width: "100%"
                  }}
                  value={this.state.leftNumberInput}
                  onChange={event =>
                    this.setState({
                      leftNumberInput: event.target.value.replace(/\D/, "")
                    })
                  }
                />
              </div>
            </div>
            <FaExchangeAlt />
            <div
              style={{
                width: "40%",
                height: "50%",
                marginTop: "20px",
                paddingLeft: 20
              }}
            >
              <h3>1 USD = 0.8110 EUR</h3>
              <div
                style={{
                  backgroundColor: "#2e4265",
                  height: "50%",
                  padding: 10
                }}
              >
                <Select styles={customStyles} />
              </div>
              <div
                style={{
                  backgroundColor: "#1d293f",
                  height: "300px",
                  padding: 10
                }}
              >
                <div>
                  <input
                    style={{
                      position: "relative",
                      marginTop: "20%",
                      backgroundColor: "#1d293f",
                      height: 100,
                      color: "#fff0f7",
                      border: "none",
                      fontSize: 50,
                      width: "100%"
                    }}
                    value={this.state.rightNumberInput}
                    onChange={event =>
                      this.setState({
                        rightNumberInput: event.target.value.replace(/\D/, "")
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ currency }) {
  const { currencyRates, isFetchingCurrencyRates, currencyNames, isFetchingCurrencyNames } = currency;
  return {
    currencyRates: currencyRates || {},
    isFetchingCurrencyRates,
    currencyNames: currencyNames || {},
    isFetchingCurrencyNames,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch1: () => {
//       dispatch(actionCreator)
//     }
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(CurrencyConverterContainer);