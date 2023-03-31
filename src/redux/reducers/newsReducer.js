import { ActionTypes } from "../constants/action-types";
const intialState = {
  news: [],
};

export const newsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_NEWS:
        return { ...state, news: payload };
      default:
        return state;
    }
  };
  
