import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0
    }
  }
  incrementClicks() {
    this.props.updateClick(this.props.char)
  }
  render() {
    let verb = "";
    if (this.props.handle === 'inc') {
      verb = "Choose";
    } else if (this.props.handle === 'dec') {
      verb = "Remove";
    } else {
      verb = "ERROR";
    }
    return <button onClick={this.incrementClicks.bind(this)}>{verb} {this.props.char}</button>;
  }
}

export default Button;