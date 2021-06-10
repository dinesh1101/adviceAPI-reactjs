import "./App.css";
import Display from "./display.jsx";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    advice: "",
  };

  handleAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.handleAdvice();
  }
  render() {
    const { advice } = this.state;
    return <Display onView={advice} onAdvice={this.handleAdvice} />;
  }
}

export default App;
