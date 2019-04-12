const Mongoose = require('mongoose');

Mongoose.connect('mongodb://mongo:27017/data');
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connection with database succeeded.');
});

exports.db = db;
