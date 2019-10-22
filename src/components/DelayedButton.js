// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    clickHandler = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event)            
        }, this.props.delay);        
    }

    render() {
        return (
            <div><button onClick={this.clickHandler} >Another button</button></div>
        );
    }
}