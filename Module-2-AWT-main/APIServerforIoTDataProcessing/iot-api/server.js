const http = require('http');
const iotEvent = require('./events');
const writeLog = require('./logger');

// Event listener for processing IoT data
iotEvent.on('sensorData', (data) => {
    const logMessage = `Sensor ID: ${data.sensorId}, Temp: ${data.temperature}°C, Humidity: ${data.humidity}%`;
    writeLog(logMessage);
});

// Create HTTP Server
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/api/sensor') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { sensorId, temperature, humidity } = JSON.parse(body);

                if (!sensorId || temperature === undefined || humidity === undefined) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: 'Invalid data format' }));
                }

                // Emit event for processing
                iotEvent.emit('sensorData', { sensorId, temperature, humidity });

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Data received successfully' }));
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

// Start Server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`IoT API Server running on http://localhost:${PORT}`);
});
