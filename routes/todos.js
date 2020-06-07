var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

// GET /todos
router.get('/', todosCtrl.index);
// GET /todos/new   to see a new todo form 
// router.get('/new', todosCtrl.new);


// POST /todos
router.post('/', todosCtrl.create);
// DELETE /todos/:id
router.delete('/:id', todosCtrl.delete);

module.exports = router;