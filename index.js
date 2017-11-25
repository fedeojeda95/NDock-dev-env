const express = require('express');
const bodyParser = require('body-parser');

const TodosRouter = require('./src/todos');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());

// To-Dos endpoints
const todosRouter = new TodosRouter();
todosRouter.register(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);