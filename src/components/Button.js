import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      shotvalue: 0,
      targets: [],
      selectedTargetIndices: [],
    };
  }

  componentDidMount() {
    let that = this;
    window.addEventListener("load", function () {
      const targets = document.querySelectorAll(".target");
      that.setState({
        targets: targets,
      });
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Zufall Generator</button>
        <button>Hit Target</button>
        <button>Fail Target</button>
      </div>
    );
  }

  handleClick() {
    let found = true;

    while (found) {
      var randomNumber = Math.floor(Math.random() * this.state.targets.length);
      if (!this.state.selectedTargetIndices.includes(randomNumber)) {
    
        found=false;
      }
    }
    let foundValues = this.state.selectedTargetIndices;
    foundValues.push(randomNumber);
   
    var randField = this.state.targets[randomNumber];
    randField.classList.add("checked");
  
    this.setState({
      selectedTargetIndices:foundValues,
      value: randField.attributes.shotvalu
    })
  }
}

export default Button;
