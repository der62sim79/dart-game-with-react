import React, { Component } from "react";

class Button extends Component {
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      shotvalue: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>press</button>
      </div>
    );
  }


  handleClick() {
    const targets = document.querySelectorAll(".target");
    var randomNumber = Math.floor(Math.random() * targets.length);
    var randField = targets[randomNumber];
    this.setState({value: randField.attributes.shotvalue})
    
  }
}

export default Button;
