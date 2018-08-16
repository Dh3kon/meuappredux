import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ListaPacotes from "./ListaPacotes";
import { getTodosOsPacotes } from "../../store";

const mapStateToProps = (state, ownProps) => ({
  pacotes: state.pacote
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      getTodosOsPacotes
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaPacotes);
