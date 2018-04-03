import React, { Component } from "react";
import Header from "./myComps/Header";
import List from "./myComps/List";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
