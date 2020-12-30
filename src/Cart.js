import React from 'react';
import Total from './Total';
import Summary from './Summary';

// This object will allow us to
// easily convert numbers into US dollar values


export default class Cart extends React.Component {

    render() {
    
        return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary 
                selected={this.props.selected}/>
            <Total 
                selected={this.props.selected}/>
        </section>
        )
    }
}