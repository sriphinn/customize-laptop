import React from 'react';
import Options from './Options';

// This object will allow us to
// easily convert numbers into US dollar values


export default class SummarySection extends React.Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <Options
                  features={this.props.features}
                  selected={this.props.selected}
                  updateFeature={this.props.updateFeature} 
                  feature={feature}
                />
              </fieldset>
            );
          });
    
        return (
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
        )
    }
}