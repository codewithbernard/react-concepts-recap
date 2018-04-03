import React, { Component } from "react";
import { ITEMS } from "../data/items";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    return <div>{ITEMS.map(myvar => <ListItem txt={myvar} />)}</div>;
  }
}

export default List;
