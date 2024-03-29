import React, { Component } from "react";

export default class PlayRound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      targets: [],
      selectedTargetIndices: [],
      shootCounter: 2,
      roundScore: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.round !== this.props.round) {
      this.selectRandomField();
      this.setState({
        shootCounter: 2,
        roundScore: 0,
      });
    }
  }

  componentDidMount() {
    const targets = document.querySelectorAll(".target");
    this.setState({ targets });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleHit}>Ziel getroffen</button>
        <button onClick={this.handleFail}>Ziel verfehlt</button>
        <h1>{this.state.roundScore}</h1>
      </div>
    );
  }

  selectRandomField = () => {
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
    if (this.props.playerNumber === 0) {
      randField.classList.add("checked");
    } else {
      randField.classList.add("checked2");
    }

    this.setState({
      selectedTargetIndices: foundValues,
      shotvalue: randField.attributes.shotvalue,
    });
  };

  handleFail = () => {
    var shootCounter = this.state.shootCounter;
    this.setState({
      shootCounter: shootCounter - 1,
    });
    this.isPlayerFinished(shootCounter);
  };

  handleHit = () => {
    var shootCounter = this.state.shootCounter;
    var shotvalue = parseInt(this.state.shotvalue.value);
    var roundScore = this.state.roundScore + shotvalue;
    if (shootCounter !== 0) {
      this.setState({
        shootCounter: shootCounter - 1,
        roundScore: roundScore,
      });

      this.selectRandomField();
    } else {
      this.isPlayerFinished(shootCounter);
    }
  };

  isPlayerFinished = (counter) => {
    if (counter === 0) {
      this.props.changePlayer(this.state.roundScore);
    }
  };
}
