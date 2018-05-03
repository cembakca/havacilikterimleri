const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TurkengSchema = new Schema ({
  turk: {
    type: String,
    required: true
  },
  eng : String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('turkeng', TurkengSchema);