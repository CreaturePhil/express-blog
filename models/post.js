var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true }
});

var post = mongoose.model('post', postSchema);

module.exports = post;
