const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, require: true },
  category: { type: String, require: true },
  date: { type: String, require: true },
  content: { type: String, require: true },
});

module.exports = mongoose.model('Post', postSchema);
