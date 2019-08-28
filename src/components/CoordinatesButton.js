// Code CoordinatesButton Component Here
import React, { Component } from 'react';


class CoordinatesButton extends Component {

  handleClick = (event) => {
    let buttonsArray = [];
    buttonsArray.push(event.clientX, event.clientY)
    this.props.onReceiveCoordinates(buttonsArray)
  }

  render(){
    return(
      <div>
         <button onClick={this.handleClick}>button</button>
      </div>
    )
  }
}


export default CoordinatesButton;
