const Sequelize = require('sequelize');

const sequelize = new Sequelize('todoapp', 'todoapp', 'todoapp', {
  host: 'database',
  dialect: 'postgres',
});

module.exports = sequelize;