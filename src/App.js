import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("ADD");
  };
  remove = () => {
    console.log("REMOVE");
  };
  render() {
    return (
      <div>
        <h1>The number is{this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.remove}>REMOVE</button>
      </div>
    );
  }
}

export default App;
