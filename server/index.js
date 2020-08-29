const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');
const bodyParser = require('body-parser');

require('dotenv').config({path: '.env'});

// Express configuration
const app = express();

// Enable Pug
app.set('view engine', 'pug');

// Add views
app.set('views', path.join(__dirname, './views'));

// Loading public folder
app.use(express.static('public'));

// Showing current year and route
app.use((req, res, next) => {
  // Create a new date in locals variables (res.locals)
  res.locals.currentYear = new Date().getFullYear();
  res.locals.route = req.path;

  return next();
});

// Execute bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Loading routes
app.use('/', routes());

// Validating environment
const config = configs[app.get('env')];

// Create variable to website
app.locals.appName = config.appName;

app.listen(process.env.PORT);
