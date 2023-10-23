const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    albumImage: { type: String },
    postBody: { type: String, require: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Posts', postSchema);
