// requiring module -----------
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
        no: 890,
        name: 'harsh chauhan'
    }));
});

// https://nodejs.org/api/http.html#serverlisten
server.listen(8000, '127.0.0.1', () => {
    console.log('server listening on port 8000!');
});