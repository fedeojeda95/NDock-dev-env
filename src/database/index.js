const Models = require('./models');

const database = require('./databaseConnection');

database.sync({
  force: true
});

module.exports = Models;
