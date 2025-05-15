require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const auth = require('./middleware/auth');
const role = require('./middleware/role');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

// Protected Route (any logged-in user)
app.get('/api/profile', auth, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

// Admin Only Route
app.get('/api/admin', auth, role('admin'), (req, res) => {
  res.json({ message: 'Welcome to admin panel' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
