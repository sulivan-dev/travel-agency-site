const Travel = require('../models/Travel');

exports.index = async (req, res) => {
  await Travel.findAll()
    .then(travels => res.render('travels', {
      page: 'Próximos Viajes',
      travels,
    }))
    .catch(error => console.log(error));
}

exports.retrieve = async (req, res) => {
  await Travel.findByPk(req.params.id)
    .then(travel => res.render('travel', {
      travel,
    }))
    .catch(error => console.log(error));
}
