const Travel = require('../models/Travel');
const Testimonial = require('../models/Testimonial');

exports.index = async (req, res) => {
  const travels = await Travel.findAll({ limit: 3 });
  const testimonials = await Testimonial.findAll({ limit: 3 });

  res.render('index', {
    page: 'Próximos Viajes',
    classes: 'home',
    travels,
    testimonials,
  });
}
