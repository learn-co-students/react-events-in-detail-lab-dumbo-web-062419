// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleClick = e => {
    e.persist()
    // const clickEvent = e
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
    // setTimeout(this.props.onDelayedClick(e), this.props.delay)
  }

  render() {

    console.log("DelayedButton has been hit");
    console.log("onDelayedClick function", this.props.onDelayedClick);
    console.log("delay int", this.props.delay);

    return(
      <button onClick={this.handleClick} >
      DelayedButton
      </button>
    )
  }

}
