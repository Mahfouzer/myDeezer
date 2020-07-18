import { put, takeEvery } from "redux-saga/effects";
import {
  FETCH_GENRE,
  SET_GENRE,
  GENRE_ERROR,
  FETCH_GENRE_ARTISTS,
  SET_GENRE_ARTISTS,
} from "../actions/actionsName";
import API from "../utils/API";

function* fetchingGenre() {
  try {
    const { data } = yield API.get("/genre");
    yield yield put({ type: SET_GENRE, payload: data });
  } catch (err) {
    yield yield put({ type: GENRE_ERROR });
  }
}

function* fetchingGenreArtists({ payload }) {
  try {
    const { data } = yield API.get(`/genre/${payload}/artists`);
    yield yield put({ type: SET_GENRE_ARTISTS, payload: data });
  } catch (err) {
    yield yield put({ type: GENRE_ERROR });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_GENRE, fetchingGenre);
  yield takeEvery(FETCH_GENRE_ARTISTS, fetchingGenreArtists);
}
