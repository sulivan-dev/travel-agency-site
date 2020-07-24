// Import express
const express = require('express');
const path = require('path');
const routes = require('./routes');

// Express configuration
const app = express();

// Enable Pug
app.set('view engine', 'pug');

// Add views
app.set('views', path.join(__dirname, './views'));

// Loading public folder
app.use(express.static('public'));

// Loading routes
app.use('/', routes());

app.listen(3000);
