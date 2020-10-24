const userCreateService = require('../../services/userServices/createOrUpdateUser');
const createUser = (req, res, next) => {
  userCreateService(req.body).then(response => {
    res.status(201).json(response)
  }).catch(err => {
      next(err);
  })
}

module.exports = createUser;