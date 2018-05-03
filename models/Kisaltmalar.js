const mongoose = require('mongoose');
const Schema = mongoose.Schema

const KisaltmalarSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  meaning : String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('kisaltmalar', KisaltmalarSchema);