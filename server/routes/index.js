const express = require('express');
const router = express.Router();

// Models
const Travel = require('../models/Travel');
const Testimonial = require('../models/Testimonial');

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
        travel,
      }))
      .catch(error => console.log(error));
  });

  router.get('/testimoniales', (req, res) => {
    Testimonial.findAll()
      .then(testimonials => res.render('testimonials', {
        page: 'Testimoniales',
        testimonials,
      }))
      .catch(error => console.log(error));
  });

  router.post('/testimoniales', (req, res) => {
    let { full_name, email, comment } = req.body;
    let errors = [];

    if (!full_name) {
      errors.push({'message': 'Agrega tu nombre'});
    }

    if (!email) {
      errors.push({'message': 'Agrega tu correo'});
    }

    if (!comment) {
      errors.push({'message': 'Agrega tu comentario'});
    }

    if (errors.length > 0) {
      res.render('testimonials', {
        errors,
        full_name,
        email,
        comment,
      });
    } else {
      Testimonial.create({full_name, email, comment})
      .then(testimonial => res.redirect('/testimoniales'))
      .catch(error => console.log(error));
    }
  });

  return router;
}
