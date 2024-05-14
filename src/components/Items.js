import React, { Component } from "react";
import Unit from "./Unit";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <Unit key={el.id} item={el} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Items;