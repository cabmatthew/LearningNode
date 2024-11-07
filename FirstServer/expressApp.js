const express = require('express');

// Express app
const app = express();

/**
 * Register view engine. Lets us configure application settings
 * 
 * EJS looks at folder named 'views' for the templates AUTOMATICALLY.
 * Can manually set folder 'ejsViews' for templates
 * app.set('views', 'ejsViews');
 */
app.set('view engine', 'ejs');
app.set('views', 'ejsViews');


// Localhost used automatically
app.listen(3000);

app.use((req, res, next) => {
    console.log("------- New request made! -------");
    console.log('Host: ', req.hostname);
    console.log('Path: ', req.path);
    console.log('Method: ', req.method);
    next();
});

app.use(express.static('static'));

/**
 * App.get: replaces switch blocks, simplifying routing.
 * Res.sendFile: auto-sets headers, status codes, file reading all in one.
 */
app.get('/', (req, res) => {
    /**
     * Express code:
     * res.sendFile('./views/index.html', { root: __dirname });
     */

    /**
     * Get view, render it, send it to the browser
     * EJS looks in './ejsViews' and uses 'index.ejs'
     */

    const entries = [
        { title: 'Clients & Servers', body: 'A host computer runs a server, which listens for requests. There’s info in these requests, which helps the server decide what to respond with. IP addresses & domains help with the right connection, HTTP allows the communication using a set of instructions. Ports are like doors to computers.'},
        { title: 'Requests & Responses', body: 'Req & Res. Req is an object containing info about the request, like the URL requested. Res is what\'s sent back after the server processes the response. This can be HTML code, CSS code, or data coming from a DB.'},
        { title: 'Express!', body: 'Express makes routing much quicker to implement, since some frequently written code is automatically built in. That includes the content type headers.'},
        { title: 'View Engines', body: 'View or template engines help with dynamically showing data. The view engine processes the template files, then processes them into HTML, while passing in data. There are placeholders we write into the template files which are replaced with data pulled from the server.'}
    ]
    res.render('index', { title: 'Home', entries: entries });
});


/**
 * DIDN'T NEED THESE. USED STATIC FOLDER INSTEAD. MUCH EASIER!!
 */

// app.get('/aboutStyles.css', (req, res) => {
//     /**
//      * res.sendFile('./views/styles.css', { root: __dirname });
//      */
//     // res.render()
//     res.sendFile('./ejsViews/aboutStyles.css', { root: __dirname });
// })

// app.get('/styles.css', (req, res) => {
//     /**
//      * res.sendFile('./views/styles.css', { root: __dirname });
//      */
//     // res.render()
//     res.sendFile('./ejsViews/styles.css', { root: __dirname });
// })

app.get('/about', (req, res) => {
    /**
     * res.sendFile('./views/about.html', { root: __dirname });
     */

    const cards = [
        { cardColor: 'teal', cardTitle: 'Supervisor', cardBio: 'Monitors activity to identify project roadblocks'},
        { cardColor: 'red', cardTitle: 'Team Builder', cardBio: 'Scans our talent network to create the optimal team for your project'},
        { cardColor: 'yellow', cardTitle: 'Karma', cardBio: 'Regularly evaluates our talent to ensure quality'},
        { cardColor: 'blue', cardTitle: 'Calculator', cardBio: 'Uses data from past projects to provide better delivery estimates'},
    ]
    res.render('about', { title: 'About', cards: cards});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})
;

app.get('/entries/create', (req, res) => {
    res.render('create', { title: 'New entry'});
});

/**
 * 404 error code handling. Runs at the very end if no match is found for requested URL.
 */
app.use((req, res) => {
    /**
     * res.status(404).sendFile('./views/404.html', { root: __dirname });
     */
    res.status(404).render('404', { title: '404' });
});