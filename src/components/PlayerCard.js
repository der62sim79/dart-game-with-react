import React, { Component } from "react";
import mon from "./image/mon.jpg";
import styles from "./PlayerCard.module.css";
import name from "./InputPlayer.js";

class PlayerCard extends Component {
  

  render() {
    return (
      <div className={styles.card}>
        <img src={mon} alt="Avatar" width="300px" />
        <div className={styles.container}>
          <h1>{this.props.name}</h1>
          <p>{this.props.score}</p>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
