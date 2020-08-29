const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const travelController = require('../controllers/travelController');
const testimonialController = require('../controllers/testimonialController');

module.exports = function() {
  router.get('/', homeController.index);
  router.get('/nosotros', aboutController.view);
  router.get('/viajes', travelController.index);
  router.get('/viajes/:id', travelController.retrieve);
  router.get('/testimoniales', testimonialController.index);
  router.post('/testimoniales', testimonialController.create);

  return router;
}
