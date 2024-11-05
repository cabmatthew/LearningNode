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
    res.render('index');
});

app.get('/styles.css', (req, res) => {
    /**
     * res.sendFile('./views/styles.css', { root: __dirname });
     */
    // res.render()
    res.sendFile('./views/styles.css', { root: __dirname });
})

app.get('/about', (req, res) => {
    /**
     * res.sendFile('./views/about.html', { root: __dirname });
     */
    res.render('about');
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})
;

app.get('/entries/create', (req, res) => {
    res.render('create');
});

/**
 * 404 error code handling. Runs at the very end if no match is found for requested URL.
 */
app.use((req, res) => {
    /**
     * res.status(404).sendFile('./views/404.html', { root: __dirname });
     */
    res.status(404).render('404');
});