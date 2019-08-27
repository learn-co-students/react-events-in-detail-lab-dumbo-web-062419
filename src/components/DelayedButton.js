// Code DelayedButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{

    handleClick = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay)
    }

    render(){
        console.log(this.props.onDelayedClick)
        return (
            <button onClick={this.handleClick}>Delay</button>
        )
    }
}