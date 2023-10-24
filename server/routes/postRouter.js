const express = require('express');
const router = express.Router();
const Post = require('../models/Post-Model');

router.post('/create-post', async (req, res) => {
  const newPost = new Post({
    albumImage: req.body.albumImage,
    albumID: req.body.albumID,
    albumTitle: req.body.albumTitle,
    postBody: req.body.postBody,
  });
  const savedPost = await Post.create(newPost);
  res.status(200).json(savedPost);
});

router.get('/get-feed', async (req, res) => {
  console.log('GET FEED ROUTER RUNNING');
  const results = await Post.find().sort({ createdAt: -1 });
  res.status(200).json(results);
});

module.exports = router;
