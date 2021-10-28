// requiring module -----------
const fs = require('fs');

console.log('hello');

// non-blocking async. way, -- callbk hell
// https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if (err) throw err;
    console.log(data1);
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        if (err) throw err;
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            if (err) throw err;
            console.log(data3);
            // https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf8', (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        });
    });
});
console.log("some log");