const Models = require('./models');

const database = require('./databaseConnection');

if (process.env.NODE_ENV !== 'test') {
  database
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  database.sync({
    force: true
  });
}

module.exports = Models;
