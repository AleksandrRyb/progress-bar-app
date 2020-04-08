import { ADD_ITEM } from "./constants";

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [action.payload, ...state];
    default:
      return state;
  }
}
