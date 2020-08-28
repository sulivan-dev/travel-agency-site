const express = require('express');
const router = express.Router();

const Travel = require('../models/travels');

module.exports = function() {
  router.get('/', (req, res) => {
    res.render('index');
  });

  router.get('/nosotros', (req, res) => {
    res.render('about', {
      page: 'Sobre Nosotros',
     });
  });

  router.get('/viajes', (req, res) => {
    Travel.findAll()
      .then(travels => res.render('travels', {
        page: 'Próximos Viajes',
        travels,
      }))
      .catch(error => console.log(error));
  });

  router.get('/viajes/:id', (req, res) => {
    Travel.findByPk(req.params.id)
      .then(travel => res.render('travel', {
        travel
      }))
      .catch(error => console.log(error));
  });

  return router;
}
