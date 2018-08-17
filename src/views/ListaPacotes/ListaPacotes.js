import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardPacote } from "../../components";

export default class ListaPacotes extends Component {
  static propTypes = {
    pacotes: PropTypes.array.isRequired
  };

  static defaultProps = {
    // pacotes: []
  };

  componentDidMount() {
    this.props.getTodosOsPacotes();
  }

  render() {
    const { pacotes } = this.props;

    return (
      <div>
        {pacotes.map((detalhes, index) => (
          <a key={index} href={`/${detalhes.id}`}>
            <CardPacote {...{ detalhes }} />
          </a>
        ))}
      </div>
    );
  }
}
