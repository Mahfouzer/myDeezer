import { put, takeEvery } from "redux-saga/effects";
import { FETCH_GENRE, SET_GENRE } from "../actions/actionsName";
import API from "../utils/API";

function* fetchingGenre() {
  try {
    const { data } = yield API.get("/genre");
    yield yield put({ type: SET_GENRE, payload: data });
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_GENRE, fetchingGenre);
}
