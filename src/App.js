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
      players:[],
      playedRounds:0,
      score:0
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


  render() {
    return (
      <div className="App">
        <Header />
        <InputPlayer playerAdded={this.playerAdded}/>
        <DartDisc />
        <Button />
        {this.getPlayers()}
      </div>
    );
  }
}

export default App;
