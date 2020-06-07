const todos = [];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function deleteOne(id) {
  const idx = todos.findIndex((todo) => todo.id == id);
  if (idx !== -1) {
    todos.splice(idx, 1); 
  };
}

function create(todo) {
  todo.id = Date.now() % 1000000;
  todo.done = false;
  todos.push(todo);
}

function getOne(id) {
  return todos.find((todo) => todo.id === parseInt(id));
}

function getAll() {
  return todos;
}
