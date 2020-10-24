const UserListService = require('../../services/userServices/userList');

const userList = (req, res, next) => {
  UserListService(req.body).then(response => {
    res.status(200).json(response)
  }).catch(err => {
      next(err);
  })
}

module.exports = userList;