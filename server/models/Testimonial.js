const Sequelize = require('sequelize');
const db = require('../config/database');

const testimonial = db.define('testimonial', {
  full_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  comment: {
    type: Sequelize.STRING,
  }
});

module.exports = testimonial;
