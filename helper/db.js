const mongoose = require('mongoose');


module.exports = () => {
  mongoose.connect("mongodb://user:test123@ds131137.mlab.com:31137/havacilikterimleri", {useMongoClient: true})
  mongoose.connection.on('open', () => {
    //console.log("MongoDB connected!");
  });
  mongoose.connection.on('error', (err) => {
    console.log("MongoDB error:", err);
  });

  mongoose.Promise = global.Promise;
}