const User = require('../../models/userSchema');
const ErrorHandler = require('../../utils/errorHandler');
const successResponseGenerator = require('../../utils/successResponseGenerator');

const userById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findById(id);
      resolve(successResponseGenerator('Successfull', user));
    } catch (error) {
      reject(new ErrorHandler(500, `Internal Server error`));
    }
  })
}

module.exports = userById;