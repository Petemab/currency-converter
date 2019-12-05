import React, { Component } from 'react';
import TitleBar from './TitleBar';
import { FaExchangeAlt } from 'react-icons/fa';

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
   
    };
  }



  render() {
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
                <p>select box here</p>
              </div>
              <div
                style={{
                  backgroundColor: "#1d293f",
                  height: '250px',
                  padding: 10,
                }}
              >
                <p>Text input here</p>
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
                <p>select box here</p>
              </div>
              <div
                style={{
                  backgroundColor: "#1d293f",
                  height: '250px',
                  padding: 10,
                }}
              >
                <p>Text input here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrencyConverterContainer;