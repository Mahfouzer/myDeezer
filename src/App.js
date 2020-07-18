import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGenre, clearArtists } from "./actions";
import {
  BasicLayout,
  ListLayout,
  HeaderLayout,
  HeaderText,
  Card,
  CardImage,
  CardTitle,
  CardButton,
} from "./components";
import appHistory from "./history";

function App({ genres, fetchGenre, clearArtists, error = null }) {
  useEffect(() => {
    fetchGenre();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <BasicLayout>
      <HeaderLayout>
        <HeaderText>MyDeezer</HeaderText>
        <HeaderText smallerText>Genres</HeaderText>
      </HeaderLayout>
      <ListLayout>
        {genres ? (
          genres.map((genre) => (
            <Card key={genre.id}>
              <CardImage src={genre.picture_big} alt={genre.name}></CardImage>
              <CardTitle>{genre.name}</CardTitle>
              <CardButton
                onClick={() => {
                  clearArtists();
                  appHistory.push(`/${genre.id}`);
                }}
              >
                Show artists
              </CardButton>
            </Card>
          ))
        ) : (
          <h1>Loading genres...</h1>
        )}
      </ListLayout>
    </BasicLayout>
  );
}

const mapStateToProps = (state) => ({
  genres: state.genre.genres?.data,
  error: state.genre.error,
});

export default connect(mapStateToProps, { fetchGenre, clearArtists })(App);
