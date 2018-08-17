import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DetalhesPacote extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  static defaultProps = {};

  render() {
    return (
      <div>
        <p>DetalhesPacote</p>
      </div>
    );
  }
}
