// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  buttonClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX,e.clientY]);
  };

render(){

  return (
    <div>
      <button onClick={this.buttonClick}>Click Me</button>
    </div>
  );
}

}
