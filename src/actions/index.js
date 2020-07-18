import { FETCH_GENRE, FETCH_GENRE_ARTISTS, CLEAR_ARTISTS } from "./actionsName";

export function fetchGenre() {
  return { type: FETCH_GENRE };
}

export function fetchGenreArtists(id) {
  return { type: FETCH_GENRE_ARTISTS, payload: id };
}

export function clearArtists() {
  return { type: CLEAR_ARTISTS };
}
