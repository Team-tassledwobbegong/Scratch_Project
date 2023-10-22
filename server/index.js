const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
dotenv.config();
app.use(express.json());

app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    clientId: '07550a4dafc0463485755de21f1e51f8',
    clientSecret: '43e5e3122aec4208936e79c8115cd11f',
    redirectUri: 'http://localhost:3000',
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(err => console.log(err));
});

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    clientId: '07550a4dafc0463485755de21f1e51f8',
    clientSecret: '43e5e3122aec4208936e79c8115cd11f',
    redirectUri: 'http://localhost:3000',
    refreshToken: refreshToken,
  });
  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(err => res.send(err));
});

app.use('/dist', express.static(path.join(__dirname, '../dist')));

// app.get('/search', (req, res) => {
//   console.log('/SEARCH ROUTER IS RUNNING')
//   return res.status(200).sendFile(path.join(__dirname, '../client/search.html'));
// });
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000, console.log(`listening on PORT:${3000}`));
