const { v4: uuidv4 } = require('uuid');
const tasks = require('../data/tasks');

// Get all tasks
exports.getTasks = (req, res) => {
  res.json(tasks);
};

// Get single task
exports.getTaskById = (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

// Create task
exports.createTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: uuidv4(), title, description, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Update task
exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const { title, description, completed } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  if (typeof completed === 'boolean') task.completed = completed;

  res.json(task);
};

// Delete task
exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send();
};
