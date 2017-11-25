class TodosSerializer {
  constructor(todo) {
    this.id = todo.id;
    this.title = todo.title;
    this.description = todo.description;
  }
}

module.exports = TodosSerializer;