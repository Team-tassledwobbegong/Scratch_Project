import React from 'react';
import '../app.css';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const spotifyApi = new SpotifyWebApi({
  clientId: '638fa075b2e7492490a8ab9eb0a6750e',
  clientSecret: 'c596188e4c994b29a8a30d195108153d',
});

const SearchAlbum = ({
  accessToken,
  searchInput,
  albums,
  albumArt,
  albumCards,
  albumIndex,
  setSearchInput,
  setAlbums,
  setAlbumArt,
  setAlbumCards,
  setAlbumIndex,
}) => {
  useEffect(() => {
    spotifyApi.setAccessToken(accessToken);
  }, []);
  useEffect(() => {
    const albumCards = albums.map((element, i) => {
      return (
        <Card className='text-center'>
          <Card.Img src={element.images[0].url} />
          <Card.Body>
            <Card.Title>{`${element.name}`}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{`${element.artists[0].name}`}</Card.Subtitle>
            <Link to='/create-post'>
              <Button
                className='postReviewButton'
                varient='primary'
                onClick={() => {
                  setAlbumIndex(i);
                }}>
                Leave Review
              </Button>
            </Link>
          </Card.Body>
        </Card>
      );
    });
    setAlbumCards(albumCards);
    console.log(albums);
  }, [albums]);

  const searchArtists = async e => {
    e.preventDefault();
    spotifyApi
      .searchArtists(searchInput)
      .then(data => {
        return data.body.artists.items[0].id;
      })
      .then(artistID => {
        return spotifyApi.getArtistAlbums(artistID);
      })
      .then(data => {
        setAlbums(data.body.items);
      });
  };

  return (
    <div className='App'>
      <Container className='searchbar'>
        <InputGroup className='mb-3' size='lg'>
          <FormControl
            placeholder='Search by Artist for Albums'
            type='input'
            onKeyPress={e => {
              if (e.key == 'Enter') {
                searchArtists(e);
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button className='searchButton' onClick={e => searchArtists(e)}>
            Search
          </Button>
        </InputGroup>
        <Container className='text-center'>
          <h1 className='feed'>Hello Wobbejammers</h1>
        </Container>
      </Container>
      <Container>{albumCards}</Container>
      <Container className='profile'></Container>
    </div>
  );
};

export default SearchAlbum;
