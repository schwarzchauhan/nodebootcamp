// requiring module -----------
const fs = require('fs');
const http = require('http');
const url = require('url');

// reading only once i.e. synchrounously
const jsondata = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataobject = JSON.parse(jsondata);

const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url;

    if (pathName === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(jsondata);
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