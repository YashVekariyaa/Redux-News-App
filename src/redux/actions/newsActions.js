import { ActionTypes } from "../constants/action-types";

export const setNews = (news) => {
  return {
    type: ActionTypes.SET_NEWS,
    payload: news,
  };
};
