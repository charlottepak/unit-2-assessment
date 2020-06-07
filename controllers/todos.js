const Todo = require("../models/todo");

module.exports = {
  index,
  create,
  delete: deleteTodo,
  getOne,
};

function getOne(id) {
  return lists.find((list) => list.id === parseInt(id));
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect("/todos");
}

function create(req, res) {
  Todo.create(req.body);
  res.redirect("/todos");
}

function index(req, res) {
  res.render("todos/index.ejs", {
    todos: Todo.getAll(),
  });
}
