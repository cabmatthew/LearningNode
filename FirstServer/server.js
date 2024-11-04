const http = require('http');
const fs = require('fs');

/**
 * Callback function runs when a request comes in.
 * Parameters: req, res
 * Request: has info about the request
 * Response: server's response data
 */
const server = http.createServer((req, res) => {
    console.log(`Req url: ${req.url}\nReq method: ${req.method}`);

    let path = './views/';
    switch(req.url) {
        case '/' :
            res.setHeader('content-type', 'text/html');
            path += 'index.html';
            // Got the page, everything's ok
            res.statusCode = 200;
            break;
        case '/about' :
            res.setHeader('content-type', 'text/html');
            path += 'about.html';
            // Got the page, everything's ok
            res.statusCode = 200;
            break;
        case '/aboutusjk' :
            // Resource was moved, now doing a redirect
            
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/styles.css' :
            res.setHeader('content-type', 'text/css');
            path += 'styles.css';
            break;
        default :
        res.setHeader('content-type', 'text/html');
            path += '404.html';
            // Doesn't exist, not good
            res.statusCode = 404;
            break;
    }
    
    
    // Read data, send it as a response.
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })
});

/**
 * Port number
 * Localhost (hostname, default is 'localhost')
 * Callback function
 * 
 * Localhost is like a domain name on the web
 * Points to 127.0.0.1, a.k.a our own computer
 * Browser connects back to our own computer
 * Server listens coming to request coming to our computer
 * 
 * Port number: 'door' into a computer
 * Common for web dev: 3000
 * We use 'localhost:3000' in the browser
 * Browser connects to our computer, using that port #
 * 
 * Just hangs, since our server doesnt' send a response
 */
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000.');
})


