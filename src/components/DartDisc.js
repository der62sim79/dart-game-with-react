import React, { Component } from 'react';
import DartsTarget from './DartsTarget';
import styles from './DartDisc.module.css';

class DartDisc extends Component {
    render() { 
        return ( 
            <div className = {styles.sizeDisc}>
            < DartsTarget />
            </div>
         );
    }
}
 
export default DartDisc;