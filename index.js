// requiring module -----------
const fs = require('fs');
const http = require('http');
const url = require('url');


const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if (!product.organic)
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

    return output;
}

// reading only once i.e. synchrounously
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const jsondata = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataobject = JSON.parse(jsondata);

const server = http.createServer((req, res) => {
    console.log(req.url);
    const { query, pathname } = url.parse(req.url, true);
    console.log(url.parse(req.url, true));
    console.log(query);
    console.log(pathname);

    if (pathname === '/overview') {
        console.log(query);

        const cardsHtml = dataobject.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        // console.log(output);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(output);

    } else if (pathname === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(jsondata);
    } else if (pathname === '/product') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const product = dataobject[query.id];
        console.log(query);
        const o = replaceTemplate(tempProduct, product);
        res.end(o);
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