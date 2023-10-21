import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';

// const spotifyApi = new SpotifyWebApi({
//   clientId: '07550a4dafc0463485755de21f1e51f8',
//   clientSecret: '43e5e3122aec4208936e79c8115cd11f',
//   redirectUri: 'http://localhost:3000',
// });

export default function Dashboard({ code }) {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  useEffect(() => {
    axios
      .post('/login', { code })
      .then(response => {
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setExpiresIn(response.data.expiresIn);
      })
      .catch(err => console.log(err));
  }, [code]);

  // const handlePost = function () {
  //   const artistInput = document.getElementById('artist').value;
  //   axios.defaults.headers.post['Authorization'] = `Bearer' + ${accessToken}}`;
  //   let url =
  //     'https://api.spotify.com/v1/search?q=' + artistInput + '&type=artist';
  //   axios.post(url, { artistInput }).then(response => console.log(response));
  // };

  async function handlePost2() {
    console.log(accessToken);
    const artistInput = document.getElementById('artist').value;
    let url =
      'https://api.spotify.com/v1/search?q=' + artistInput + '&type=artist';
    const artistID = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.artists.items[0].id;
      });
    console.log('ARTIST ID: ' + artistID);
  }

  // const handlePost3 = () => {
  //   spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  //     function (data) {
  //       console.log('Artist albums', data.body);
  //     },
  //     function (err) {
  //       console.error(err);
  //     },
  //   );
  // };

  return (
    <div>
      <input id='artist' />
      <button onClick={() => handlePost2()}></button>
    </div>
  );
}
