const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');
const postRouter = require('./routes/postRouter');

const app = express();
dotenv.config();
app.use(express.json());

mongoose
  .connect
  // put mongoURL here
  ()
  .then(() => {
    console.log('mongodb connected');
  })
  .catch(err => {
    console.log(err);
  });

app.post('/login', (req, res) => {
  const code = req.body.code;
  console.log('code' + code);
  const spotifyApi = new SpotifyWebApi({
    // clientId: uncomment and put spotify app details here. Can also change the redirect uri to whatever you want
    // clientSecret:
    redirectUri: 'http://localhost:3000',
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.send({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
      console.log(data);
    })
    .catch(err => console.log(err));
});

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    // clientId: same as above
    // clientSecret:
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

app.use('/posts', postRouter);

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000, console.log(`listening on PORT:${3000}`));
