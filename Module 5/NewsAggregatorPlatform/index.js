require('dotenv').config();
const express = require('express');
const app = express();
const newsRoutes = require('./routes/newsRoutes');
const validateApiKey = require('./middleware/validateApiKey');
const rateLimiter = require('./middleware/rateLimiter');

app.use('/api/news', validateApiKey, rateLimiter, newsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
