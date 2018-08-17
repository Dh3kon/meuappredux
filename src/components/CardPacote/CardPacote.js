import React, { Component } from "react";

export default class CardPacote extends Component {
  render() {
    const { detalhes } = this.props;

    return (
      <div style={{ border: "1px solid red" }}>
        <p>{JSON.stringify(detalhes, undefined, 2)}</p>
      </div>
    );
  }
}
