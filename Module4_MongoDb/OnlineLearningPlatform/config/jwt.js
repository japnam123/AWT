module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
};
