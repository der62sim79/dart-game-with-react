import "./App.css";
import { Component } from "react";
import Header from "./components/Header";
import DartDisc from "./components/DartDisc";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    const targets = document.querySelectorAll(".target");
    targets.forEach((target) => {
      target.addEventListener("click", (e) => this.handleClick(e));
    });
  }

  handleClick(e) {
    e.target.classList.add("checked");
    this.setState({
      value: e.target.attributes["shotvalue"].value,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DartDisc />
        <Button />
      </div>
    );
  }
}

export default App;
