const TodosSerializer = require('../../../src/todos/TodosSerializer');

module.exports = [
  new TodosSerializer({
    id: 1,
    title: 'FirstOne',
    description: 'FirstOne'
  }),
  new TodosSerializer({
    id: 2,
    title: 'FirstOne',
    description: 'FirstOne'
  })
];
