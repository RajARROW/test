const mongoose = require('mongoose');
const config = require('config');
const mongoURL = config.get('mongoURL');

module.exports = () => {
  mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});

  mongoose.connection.on('connected', () => {
    console.log('monogo connction success');
  })
}