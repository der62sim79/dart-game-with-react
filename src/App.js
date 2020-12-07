import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import DartDisc from "./components/DartDisc";
import Button from "./components/Button";
import InputPlayer from "./components/InputPlayer";
import PlayerCard from "./components/PlayerCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      players:[{"name":"hans","score":0},{"name":"sepp","score":0}],
      actualPlayer:0,
      playedRounds:0,
      score:0,
      isStarted:false,
      message: "Noch nicht gestartet"
    };
  }

  componentDidMount() {
  
  }

  playerAdded = (player)=>{
    let p = {"name":player, "score":0};

    let newPlayerList = this.state.players;
    newPlayerList.push(p);
    this.setState({
      players:newPlayerList
    })
  }

  getPlayers(){
    let widgets=[];

    this.state.players.forEach(element => {
      widgets.push(<PlayerCard name={element.name} score={element.score}/> )
    });
    
    return widgets;
  }

  gameLoop = ()=>{
    if (!this.state.isStarted){
      // reset scrore of players
      let message = "Spieler " + this.state.players[0].name + " ist an der Reihe";
      this.setState({
        actualPlayer:0,
        message:message,
        isStarted:true
      })
     
    }
  }




  render() {
    return (
      <div className="App">
        <Header />
        <InputPlayer playerAdded={this.playerAdded}/>
        <button onClick={this.gameLoop}>Start Game</button>
        {this.state.message}
        <DartDisc />
        <Button />
        {this.getPlayers()}
      </div>
    );
  }
}

export default App;
