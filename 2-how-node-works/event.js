const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('There was  a new sale!');
});

myEmitter.on('newSale', () => {
    console.log("customer name: Annalisa Berg");
});

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in Stock`);
});

myEmitter.emit("newSale", 9);


/////////////////


const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received');
    console.log(req.url);
    res.end('request received');
});
server.on('request', (req, res) => {
    console.log('another request received');
});
server.on('close', (req, res) => {
    res.end('server closed');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('waiting for request');
})