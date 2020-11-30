import React, { Component } from "react";
import styles from "./InputPlayer.module.css";

class InputPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Spieler Name " + this.state.value);
    event.preventDefault();
    this.props.playerAdded(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={styles.fontSize}>
          Spieler Name:
          <input
            className={styles.input}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" value="Submit" className={styles.btn}>
          Spieler
        </button>
      </form>
    );
  }
}

export default InputPlayer;
