import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_COUNT:
      return state + payload;

    case SUB_COUNT:
      return state - payload;

    default:
      return state;
  }
};

export default reducerCounter;
