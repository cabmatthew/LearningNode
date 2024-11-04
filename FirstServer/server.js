const http = require('http');

/**
 * Callback function runs when a request comes in.
 * Parameters: req, res
 * Request: has info about the request
 * Response: server's response data
 */
const server = http.createServer((req, res) => {
    console.log('Request made');
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