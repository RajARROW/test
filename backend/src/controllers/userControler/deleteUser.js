const deleteUserService = require('../../services/userServices/deleteUser');
const deleteUser = (req, res, next) => {
  deleteUserService(req.params.id).then(response => {
    res.status(200).json(response)
  }).catch(err => {
      next(err);
  })
}

module.exports = deleteUser;