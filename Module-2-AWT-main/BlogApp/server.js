const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'pages', req.url === '/' ? 'index.html' : req.url + '.html');

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            // If file not found, serve the 404 page
            filePath = path.join(__dirname, 'pages', '404.html');
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
        }

        // Read and serve the requested file
        fs.readFile(filePath, (error, content) => {
            if (error) {
                res.writeHead(500);
                res.end('Internal Server Error');
            } else {
                res.end(content);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
