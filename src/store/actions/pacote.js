import * as api from "../api";

export const ADD_PACOTE = "ADD_PACOTE";

export const adicionaPacote = payload => ({
  type: ADD_PACOTE,
  payload
});

export const getTodosOsPacotes = () => {
  return dispatch => {
    api.getTodosOsPacotes().then(payload => dispatch(adicionaPacote(payload)));
  };
};
