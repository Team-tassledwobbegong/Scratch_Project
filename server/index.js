const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();
app.use(express.json());

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.listen(
  process.env.PORT,
  console.log(`listening on PORT:${process.env.PORT}`),
);
