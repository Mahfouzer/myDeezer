import { combineReducers } from "redux";
import {
  SET_GENRE,
  GENRE_ERROR,
  SET_GENRE_ARTISTS,
  CLEAR_ARTISTS,
} from "../actions/actionsName";

function genre(state = { error: null, genres: null }, action) {
  switch (action.type) {
    case SET_GENRE:
      return { ...state, genres: { ...action.payload } };
    case SET_GENRE_ARTISTS:
      return { ...state, artists: { ...action.payload } };
    case CLEAR_ARTISTS:
      return { ...state, artists: null };
    case GENRE_ERROR:
      return {
        ...state,
        error: "There has been an error, please try again later",
      };
    default:
      return state;
  }
}

export default combineReducers({ genre });
