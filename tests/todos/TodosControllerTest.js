const mocha = require('mocha');
const expect = require('chai').expect;

const TodosController = require('../../src/todos/TodosController');
const { AddTodoData, GetTodosData } = require('./testData');
const { createGetTodosStub, createAddTodoStub } = require('./stubs');

mocha.describe('The todos controller', function () {
  mocha.it('returns the todos correctly', function() {
    const dataAccessStub = createGetTodosStub(this.sandbox);
    const todosController = new TodosController();

    todosController
      .getAllTodos()
      .then(recievedTodos => {
        expect(dataAccessStub).to.be.calledWith();
        expect(recievedTodos).to.eql(GetTodosData);
      });
  });

  mocha.it('creates a todo correctly', function() {
    const dataAccessStub = createAddTodoStub(this.sandbox);
    const todosController = new TodosController();

    todosController
      .createTodo(AddTodoData)
      .then(() => {
        expect(dataAccessStub).to.be.calledWith();
      });
  });
});