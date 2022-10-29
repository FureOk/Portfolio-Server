// 26 - 10- 2022
const path = require('path');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    if(req.url === '/'){
        let filePath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 
                'Content-Type': 'text/html' 
            });
            res.end(data);
        })
    }
    if(req.url === '/home'){
        let filePath = path.join(__dirname, 'public', 'home.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 
                'Content-Type': 'text/html' 
            });
            res.end(data);
        })
    }
    if(req.url === '/about'){
        let filePath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 
                'Content-Type': 'text/html' 
            });
            res.end(data);
        })
    }
    if(req.url === '/contact'){
        let filePath = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 
                'Content-Type': 'text/html' 
            });
            res.end(data);
        })
    }
});

// creating a port where port number is 4000
server.listen(4000, '127.0.0.1');
