import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavContainer from './NavContainer';
import FeedContainer from './Feedcontainer';
import PostCreator from '../Components/postCreator';
import Search from './Search';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const spotifyApi = new SpotifyWebApi({
  clientId: '638fa075b2e7492490a8ab9eb0a6750e',
  clientSecret: 'c596188e4c994b29a8a30d195108153d',
});

const MainContainer = ({ code }) => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [expiresIn, setExpiresIn] = useState('');
  const [user, setUser] = useState('');

  const [searchInput, setSearchInput] = useState('');
  const [albums, setAlbums] = useState([]);
  const [albumArt, setAlbumArt] = useState('');
  const [albumCards, setAlbumCards] = useState([]);
  const [albumIndex, setAlbumIndex] = useState('');

  useEffect(() => {
    axios
      .post('http://localhost:3000/login', { code })
      .then(response => {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setExpiresIn(response.data.expiresIn);
      })
      .catch(err => {
        console.log(err);
        // window.location = '/';
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post('/refresh', { refreshToken })
        .then(response => {
          setAccessToken(response.data.accessToken);
          setExpiresIn(response.data.expiresIn);
        })
        .catch(err => {
          window.location = '/';
        });
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <Container>
      <Router>
        <NavContainer />
        <Routes>
          <Route path='/' element={<FeedContainer />} />
          <Route
            path='/search'
            element={
              <Search
                searchInput={searchInput}
                albums={albums}
                albumArt={albumArt}
                albumCards={albumCards}
                albumIndex={albumIndex}
                setSearchInput={setSearchInput}
                setAlbums={setAlbums}
                setAlbumArt={setAlbumArt}
                setAlbumCards={setAlbumCards}
                setAlbumIndex={setAlbumIndex}
                accessToken={accessToken}
              />
            }
          />
          <Route
            path='/create-post'
            element={<PostCreator albums={albums} albumIndex={albumIndex} />}
          />
        </Routes>
      </Router>
    </Container>
  );
};
//<Button onClick={Search()}
//{() => {return (<Search/>)}}
export default MainContainer;
