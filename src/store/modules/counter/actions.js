import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

export const addCount = (add) => ({
  type: ADD_COUNT,
  payload: add,
});

export const subCount = (sub) => ({
  type: SUB_COUNT,
  payload: sub,
});
