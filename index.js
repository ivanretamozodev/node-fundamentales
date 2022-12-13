const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////////
/// FILES

/*

//manera sincrona bloqueante

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
const textOut = `this is what we know about avocados: ${textIn}\n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('file written');
 */

/* 

//manera asincrona no-bloqueante

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile(
                './txt/final.txt',
                `${data2} and ${data3}`,
                'utf-8',
                (err) => {
                    console.log('files has been written');
                }
            );
        });
    });
});
console.log('will read file');

 */

////////////////////////////////////
/// SERVER

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('this is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('this is the PRODUCT');
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
        });
        res.end('Page not found :C');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server is running at PORT=3000!');
});
