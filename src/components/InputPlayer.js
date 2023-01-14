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
    event.preventDefault();
    this.props.playerAdded(this.state.value);
    this.setState({ value: "" }); // Clear the input after submission
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Spieler Name:
          <input
            className={styles.input}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter player name"
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
