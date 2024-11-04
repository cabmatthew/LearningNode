/**
 * Includes the Node.js http module
 */
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

/**
 * createServer(), a method of http
 * Creates a new HTTP server & returns it
 * 
 * With new requests, the 'request' event is called.
 * 'request' event provides two objects: 
 *      Request: like an http.IncomingMessage object
 *          - Request details, like headers and data
 *      Response: like an http.ServerResponse object
 *          - Used to return data to caller
 */
const server = createServer((req, res) => {
    // Indicate a successful response
    res.statusCode = 200;
    // Set the Content-Type header
    res.setHeader('Content-Type', 'text/plain');
    // Close the response, adding content as an argument to end()
    res.end('Hello World');
});

/**
 * Server is set to listen on the specified port & host name
 * When ready, callback function is called.
 * Here, the console.log function is called.
 */
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});