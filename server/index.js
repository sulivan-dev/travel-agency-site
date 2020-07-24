// Import express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');

// Express configuration
const app = express();

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

// Environment validate
const config = configs[app.get('env')];

// Create variable to website
app.locals.appName = config.appName;

app.listen(3000);
