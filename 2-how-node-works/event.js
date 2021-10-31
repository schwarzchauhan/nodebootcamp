const EventEmitter = require('events');

const myEmitter = new EventEmitter();


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