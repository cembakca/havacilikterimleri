const mongoose = require('mongoose');
const Schema = mongoose.Schema

const EngturkSchema = new Schema ({
  eng: {
    type: String,
    required: true
  },
  turk : String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('engturk', EngturkSchema);