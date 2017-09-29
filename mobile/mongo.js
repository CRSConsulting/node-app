const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUri = "mongodb://CRS:AmAtCRSLasAzon@cluster0-shard-00-00-hv5ft.mongodb.net:27017,cluster0-shard-00-01-hv5ft.mongodb.net:27017,cluster0-shard-00-02-hv5ft.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri, {
    useMongoClient: true
  });
}

module.exports = {
  connect,
  mongoose
};
