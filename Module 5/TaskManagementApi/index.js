const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger); // Custom middleware
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
