const TodosDataAccess = require('./TodosDataAccess');
const { Constants } = require('../common');
const TodosSerializer = require('./TodosSerializer');

class TodosController {

  constructor() {
    this.todosDataAccess = new TodosDataAccess();
  }

  getAllTodos() {
    return this.todosDataAccess.getAllTodos()
      .then(todos => this.parseTodos(todos))
  }

  parseTodos(todos) {
    return todos.map(todo => new TodosSerializer(todo));
  }

  createTodo(newTodo) {
    this.validateTodo(newTodo);
    return this.todosDataAccess.createTodo(newTodo);
  }

  validateTodo(todo) {
    // TODO: validate the attributes
  }
}

module.exports = TodosController;