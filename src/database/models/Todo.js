const Sequelize = require('sequelize');

const database = require('../databaseConnection');
const names = require('./Names');

const Todo = database.define(names.Todo, {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
})

module.exports = Todo;