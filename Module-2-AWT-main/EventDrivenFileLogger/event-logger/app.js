const logger = require('./logger');

// Simulate different system actions triggering logs
logger.emit('log', 'Server started successfully');
setTimeout(() => logger.emit('log', 'User logged in'), 2000);
setTimeout(() => logger.emit('log', 'File uploaded successfully'), 4000);
setTimeout(() => logger.emit('log', 'Database connection lost!'), 6000);
