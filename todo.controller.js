const Todo = require('../models/todo.model');

// GET /api/todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos', details: err.message });
  }
};

// POST /api/todos
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || title.trim() === '') {
      return res.status(400).json({ error: 'Title is required' });
    }
    const todo = new Todo({ title: title.trim() });
    const saved = await todo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todo', details: err.message });
  }
};

// PUT /api/todos/:id
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updated = await Todo.findByIdAndUpdate(
      id,
      { ...(title !== undefined && { title }), ...(completed !== undefined && { completed }) },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo', details: err.message });
  }
};

// DELETE /api/todos/:id
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully', id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo', details: err.message });
  }
};

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
