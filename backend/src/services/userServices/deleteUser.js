const User = require('../../models/userSchema');
const ErrorHandler = require('../../utils/errorHandler');
const successResponseGenerator = require('../../utils/successResponseGenerator');
const moongose = require('mongoose');

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await User.remove({_id: moongose.Types.ObjectId(id)});
      resolve(successResponseGenerator('User deleted Successfully', {id}));
    } catch (error) {
      console.log(error);
      reject(new ErrorHandler(500, `internal Server error`));
    }
  })
}

module.exports = deleteUser;