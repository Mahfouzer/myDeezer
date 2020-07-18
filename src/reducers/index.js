import { combineReducers } from "redux";
import { SET_GENRE } from "../actions/actionsName";

function genre(state = { authorized: false, token: null }, action) {
  switch (action.type) {
    case SET_GENRE:
      return { ...action.payload };
    default:
      return state;
  }
}

export default combineReducers({ genre });
