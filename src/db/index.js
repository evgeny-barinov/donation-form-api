const mongoose = require('mongoose');
const config = require('config');

const {host, user, pwd, dbName} = config.get('db');
const connectionString = `mongodb://${user}:${pwd}@${host}/${dbName}?authSource=admin`;

mongoose.connect(connectionString, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(error => console.log(error));

module.exports = mongoose;
