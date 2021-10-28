// requiring module -----------
const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;

    if (pathName === '/overview') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello World!',
            no: 890,
            name: 'harsh chauhan'
        }));
    } else if (pathName === '/product') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'path is product'
        }));

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'path could not be found'
        }));

    }
});

// https://nodejs.org/api/http.html#serverlisten
server.listen(8000, '127.0.0.1', () => {
    console.log('server listening on port 8000!');
});