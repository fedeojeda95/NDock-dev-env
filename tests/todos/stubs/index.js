const { GetTodosData } = require('../testData');
const TodosDataAccess = require('../../../src/todos/TodosDataAccess');

const createGetTodosStub = (sandbox) => {
  return sandbox.stub(TodosDataAccess.prototype, 'getAllTodos').callsFake(function () {
    return new Promise((resolve) => {
      resolve(GetTodosData);
    });
  });
};

const createAddTodoStub = (sandbox) => {
  return sandbox.stub(TodosDataAccess.prototype, 'createTodo').callsFake(function () {
    return new Promise((resolve) => {
      resolve();
    });
  });
};

module.exports = {
  createGetTodosStub,
  createAddTodoStub,
};