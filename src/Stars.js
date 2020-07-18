import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchGenreArtists } from "./actions";
import {
  HeaderLayout,
  HeaderText,
  ListLayout,
  Card,
  CardImage,
  CardTitle,
} from "./components";

function Stars({ artists, fetchGenreArtists, history, error = null }) {
  const id = history.location.pathname.split("/")[1];

  useEffect(() => {
    fetchGenreArtists(id);
  }, [fetchGenreArtists, id]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <HeaderLayout>
        <HeaderText>MyDeezer</HeaderText>
        <HeaderText smallerText>Artists</HeaderText>
      </HeaderLayout>

      <ListLayout>
        {artists ? (
          artists.map((artist) => (
            <Card key={artist.id}>
              <CardImage src={artist.picture_big} alt={artist.name}></CardImage>
              <CardTitle>{artist.name}</CardTitle>
            </Card>
          ))
        ) : (
          <h1>Loading artists...</h1>
        )}
      </ListLayout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    artists: state.genre.artists?.data,
    error: state.genre.error,
  };
};

export default connect(mapStateToProps, { fetchGenreArtists })(Stars);
