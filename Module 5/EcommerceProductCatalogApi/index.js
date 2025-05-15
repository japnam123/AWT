const express = require('express');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger); // Log every request
app.use(auth);   // Authenticate all requests

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
