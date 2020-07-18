import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGenre } from "./actions";

function App({ genres, fetchGenre }) {
  useEffect(() => {
    fetchGenre();
  });

  return (
    <>{genres && genres.map((genre) => <div key={genre.id}>{genre.id}</div>)}</>
  );
}

const mapStateToProps = (state) => ({
  genres: state.genre.data,
});

export default connect(mapStateToProps, { fetchGenre })(App);
