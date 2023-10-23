import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';
import authorization from './authorization';
import { Container, Form } from 'react-bootstrap';

const spotifyApi = new SpotifyWebApi({
  clientId: '638fa075b2e7492490a8ab9eb0a6750e',
  clientSecret: 'c596188e4c994b29a8a30d195108153d',
});

export default function Dashboard({ code }) {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [artists, setArtists] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [expiresIn, setExpiresIn] = useState('');

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
    console.log(accessToken);
  }, [accessToken]);

  const searchArtists = async e => {
    e.preventDefault();
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: searchKey,
        type: 'artist',
      },
    });
    console.log(data);
  };

  return (
    <form onSubmit={searchArtists}>
      <input type='text' onChange={e => setSearchKey(e.target.value)} />
      <button type={'submit'}>Search</button>
    </form>
  );
}
