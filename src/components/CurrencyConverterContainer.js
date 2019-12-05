import React, { Component } from 'react';
import TitleBar from './TitleBar';

const styles = {
  containerDiv: {



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
      <div style={styles.containerDiv}>
        <TitleBar 
          title='Currency Converter'
        />
      </div>
    );
  }
}

export default CurrencyConverterContainer;