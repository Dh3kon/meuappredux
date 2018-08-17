import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPacoteById } from "../../store";
import DetalhesPacote from "./DetalhesPacote";

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { pacoteId }
    }
  } = ownProps;

  return {
    pacote: state.pacote
      .filter(item => item.id === parseInt(pacoteId, 10))
      .shift()
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ getPacoteById }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetalhesPacote);
