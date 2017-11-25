const { Constants } = require('../common');
const { Todo } = require('../database');

class TodosDataAccess {

  constructor() {
  }

  getAllTodos() {
    return Todo.findAll();
  }

  createTodo(newTodo) {
    return Todo.create(newTodo);
  }
}

module.exports = TodosDataAccess;