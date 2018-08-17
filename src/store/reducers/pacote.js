import { ADD_PACOTE } from "../actions";

export default function pacote(state = [], action) {
  switch (action.type) {
    case ADD_PACOTE:
      return state.concat(action.payload);
    default:
      return state;
  }
}
