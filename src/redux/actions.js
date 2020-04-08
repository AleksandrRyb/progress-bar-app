import { ADD_ITEM } from "./constants";

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
