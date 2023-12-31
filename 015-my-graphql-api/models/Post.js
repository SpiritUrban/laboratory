// Post.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  content: String,
  userId: String
});

module.exports = mongoose.model('Post', postSchema);
