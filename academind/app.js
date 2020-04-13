const http = require('http');
const fs = require('fs');

function rqListner(req, res) {
    if (req.url === '/') {
        res.write('<html>');
        res.write('<body> <form action= "/message" method="POST"><input type="text" name="message"> <button type="Submit">Send</button></body>');
        res.write('</html>')
        res.end();
        return res.end();
    }
    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedbody = Buffer.concat(body).toString();
            const message = parsedbody.split('=')[1];
            fs.writeFile('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head><body> Hello world from Node.js</body></head>');
    res.write('</html>')
    res.end();
}

const server = http.createServer(rqListner);

server.listen(3000); 