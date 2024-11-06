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
    res.render('index', { title: 'Home' });
});

app.get('/aboutStyles.css', (req, res) => {
    /**
     * res.sendFile('./views/styles.css', { root: __dirname });
     */
    // res.render()
    res.sendFile('./ejsViews/aboutStyles.css', { root: __dirname });
})

app.get('/styles.css', (req, res) => {
    /**
     * res.sendFile('./views/styles.css', { root: __dirname });
     */
    // res.render()
    res.sendFile('./ejsViews/styles.css', { root: __dirname });
})

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