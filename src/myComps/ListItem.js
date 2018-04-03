import React, { Component } from "react";
class ListItem extends Component {
  state = {
    display: true
  };
  setVis = () => {
    this.setState({ display: !this.state.display });
  };
  render() {
    let myvar = " ";
    if (this.state.display) {
      myvar = this.props.txt;
    }
    return (
      <div
        style={{ padding: 10, border: "10px solid red" }}
        onClick={this.setVis}
      >
        {myvar}
      </div>
    );
  }
}
export default ListItem;
