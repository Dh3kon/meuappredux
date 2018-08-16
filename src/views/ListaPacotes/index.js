import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListaPacotes from "./ListaPacotes";

const mapStateToProps = (state, ownProps) => ({
  pacotes: state.pacote
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaPacotes);
