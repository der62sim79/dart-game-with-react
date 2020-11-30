import React, { Component } from 'react';
import mon from './image/mon.jpg';
import styles from './PlayerCard.module.css';

class PlayerCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = {styles.card}>
                <img src={mon} alt="Avatar" width="300px"/>
                <div className={styles.container}>
                    <h1>Name</h1>
                    <p>Punkte</p>
                </div>
            </div>
         );
    }
}
 
export default PlayerCard;