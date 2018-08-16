import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ListaPacotes extends Component {
  static propTypes = {
    pacotes: PropTypes.array.isRequired
  };

  static defaultProps = {
    pacotes: []
  };

  componentDidMount() {
    this.props.getTodosOsPacotes();
  }

  render() {
    const { pacotes } = this.props;

    return (
      <div>
        <p>Test</p>
        <pre>{JSON.stringify(pacotes, undefined, 2)}</pre>
      </div>
    );
  }
}
