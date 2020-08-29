const Testimonial = require('../models/Testimonial');

exports.index = async (req, res) => {
  await Testimonial.findAll()
    .then(testimonials => res.render('testimonials', {
      page: 'Testimoniales',
      testimonials,
    }))
    .catch(error => console.log(error));
}

exports.create = async (req, res) => {
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
    await Testimonial.findAll()
      .then(testimonials => {
        res.render('testimonials', {
          errors,
          full_name,
          email,
          comment,
          testimonials,
        });
      })
      .catch(error => console.log(error));
  } else {
    await Testimonial.create({full_name, email, comment})
      .then(testimonial => res.redirect('/testimoniales'))
      .catch(error => console.log(error));
  }
}
