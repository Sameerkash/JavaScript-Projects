// Serving static files through http server 

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, { 'content-type': 'text/html' });
    readStream.pipe(res);
}).listen(3000);