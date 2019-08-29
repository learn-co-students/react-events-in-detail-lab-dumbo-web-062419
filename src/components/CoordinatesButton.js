// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  constructor(props){
    super(props)
  }

  handleClick = (e) => {
    // console.log(e.clientX);
    const clientX = e.clientX
    const clientY = e.clientY
    const mouseCoordinates = []

    mouseCoordinates.push(clientX)
    mouseCoordinates.push(clientY)

    // console.log(mouseCoordinates);

    return this.props.onReceiveCoordinates(mouseCoordinates)

  }

  render() {

    // console.log("CoordinatesButton has been hit", this.props.onReceiveCoordinates("test"))

    return(
      <button type="button" onClick={this.handleClick} >CoordinatesButton
      </button>

    )
  }

}
