import React, { Component } from 'react';
import PlayerCard from './PlayerCard';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            points: 0,
            shots:0
         }
    }
    render() { 
        return ( 
            <div>
                <PlayerCard />
            </div>
         );
    }
}
 
export default Player;