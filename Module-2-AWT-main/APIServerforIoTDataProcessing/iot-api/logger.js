const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs', 'iot.log');

// Ensure logs directory exists
if (!fs.existsSync(path.dirname(logFile))) {
    fs.mkdirSync(path.dirname(logFile), { recursive: true });
}

// Function to write logs
const writeLog = (message) => {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;

    // Append log entry to file
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing log:', err);
    });

    console.log(logEntry.trim());
};

module.exports = writeLog;
