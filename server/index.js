// Import express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({path: '.env'});

// Express configuration
const app = express();

// Test database connection
db.authenticate()
  .then(() => console.log('Connection Succesfully'))
  .catch(error => console.log(error));

// Enable Pug
app.set('view engine', 'pug');

// Add views
app.set('views', path.join(__dirname, './views'));

// Loading public folder
app.use(express.static('public'));

// Showing current year
app.use((req, res, next) => {
  // Create a new date in locals variables (res.locals)
  res.locals.currentYear = new Date().getFullYear();

  return next();
})

// Loading routes
app.use('/', routes());

// Validating environment
const config = configs[app.get('env')];

// Create variable to website
app.locals.appName = config.appName;

app.listen(process.env.PORT);
