module.exports = (req, res, next) => {
  const userKey = req.query.apiKey;
  if (!userKey || userKey !== 'my-secret-key') {
    return res.status(401).json({ message: 'Invalid or missing API key' });
  }
  next();
};
