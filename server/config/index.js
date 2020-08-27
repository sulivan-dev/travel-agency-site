require('dotenv').config({path: '.env'});

module.exports = {
  development: {
    appName: `${process.env.APP_NAME} [Desarrollo]`
  },
  production: {
    appName: `${process.env.APP_NAME}`
  }
}
