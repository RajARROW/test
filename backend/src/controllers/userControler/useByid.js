const userByIdService = require('../../services/userServices/userById');

const userById = (req, res, next) => {
  userByIdService(req.params.id).then(response => {
    res.status(200).json(response)
  }).catch(err => {
      next(err);
  })
}

module.exports = userById;