import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      shotvalue: 0,
      targets: [],
      selectedTargetIndices: [],
      shootCounter: 2,
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
        <button onClick={this.handleClick.bind(this)}>Zufalls Generator</button>
        <button onClick={this.handleHit}>Ziel getroffen</button>
        <button onClick={this.handleFail}>Ziel verfehlt</button>
      </div>
    );
  }

  handleClick() {
    let found = true;

    while (found) {
      var randomNumber = Math.floor(Math.random() * this.state.targets.length);
      if (!this.state.selectedTargetIndices.includes(randomNumber)) {
        found = false;
      }
    }
    let foundValues = this.state.selectedTargetIndices;
    foundValues.push(randomNumber);

    var randField = this.state.targets[randomNumber];
    randField.classList.add("checked");

    this.setState({
      selectedTargetIndices: foundValues,
      value: randField.attributes.shotvalu,
    });
  }

  handleFail = () => {
    var shootCounter = this.state.shootCounter;
    this.setState(({ shootCounter }) => ({
      shootCounter: shootCounter - 1,
    }));
    alert(shootCounter);
  };

  handleHit = () => {
    var shootCounter = this.state.shootCounter;
    this.setState(({ shootCounter }) => ({
      shootCounter: shootCounter - 1,
    }));
    alert(shootCounter);
  };

  nextPlayer = () =>{
    let points = 0;
    this.state.targets.forEach(item => points += parseFloat(item.attributes.shotvalue.value));
  }

}

export default Button;
