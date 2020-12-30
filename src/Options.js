import React from 'react';
import Selections from './Selections';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class Options extends React.Component {

    render() {
      const {feature} = this.props 
      const options = this.props.features[feature].map(item => {
        return (
        <Selections 
            features={this.props.features}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            feature={feature} 
            item={item}/>
        )
      }); 
      return (
        <div>
          {options}
        </div>
      )     
    };  
}
