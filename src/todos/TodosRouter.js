const TodosController = require('./TodosController');
const { Constants } = require('../common');

class TodosRouter {

  constructor() {
    this.todosController = new TodosController();
  }

  getAllTodos(request, response) {
    this.todosController.getAllTodos()
      .then(todos => {
        response.status(Constants.responseCodes.success).json({ todos });
      })
      .catch(error => {
        response.status(Constants.responseCodes.error).json({ error });
      })
  }

  createTodo(request, response) {
    const todo = request.body;
    this.todosController.createTodo(todo)
      .then(() => {
        response.status(Constants.responseCodes.successNoResponse).send();
      })
      .catch(error => {
        response.status(Constants.responseCodes.error).json({ error });
      })
  }

  register(app) {
    app.get('/todos', (request, response) => {
      this.getAllTodos(request, response);
    });

    app.post('/todos', (request, response) => {
      this.createTodo(request, response);
    });
  }
}

module.exports = TodosRouter;