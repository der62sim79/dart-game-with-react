import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import DartDisc from "./components/DartDisc";

import InputPlayer from "./components/InputPlayer";
import PlayerCard from "./components/PlayerCard";
import PlayRound from "./components/PlayRound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      players: [{ "name": "Willi", "score": 0 }],
      actualPlayer: 0,
      playedRounds: -1,
      isStarted: false,
      message: "Noch nicht gestartet"
    };
  }

  componentDidMount() {

  }

  playerAdded = (player) => {
    let p = { "name": player, "score": 0 };

    let newPlayerList = this.state.players;
    newPlayerList.push(p);
    this.setState({
      players: newPlayerList
    })
  }

  getPlayers() {
    let widgets = [];

    this.state.players.forEach(element => {
      widgets.push(<PlayerCard name={element.name} score={element.score} />)
    });

    return widgets;
  }

  gameLoop = () => {
    if (!this.state.isStarted) {
      // reset scrore of players
      let message = this.state.players[0].name + " ist an der Reihe";
      this.setState({
        actualPlayer: 0,
        message: message,
        isStarted: true,
        playedRounds: 0
      })

    } else {

      let actualPlayer = (this.state.actualPlayer + 1) % this.state.players.length;
      let playedRounds = this.state.playedRounds + 1;
      let message = this.state.players[actualPlayer].name + " ist an der Reihe";
      this.setState({
        actualPlayer: actualPlayer,
        message: message,
        playedRounds: playedRounds
      })
    }
  }


  changePlayer = (score) => {
    let players = this.state.players;
    this.state.players[this.state.actualPlayer].score += score;
    this.setState({
      players:players
    })
    this.gameLoop();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <InputPlayer playerAdded={this.playerAdded} />
        <button onClick={this.gameLoop}>Start Game</button>
        <h1>{this.state.message}</h1>
        <DartDisc />
        <PlayRound round={this.state.playedRounds} changePlayer={this.changePlayer} playerNumber={this.state.actualPlayer}/>
        {this.getPlayers()}
      </div>
    );
  }
}

export default App;
