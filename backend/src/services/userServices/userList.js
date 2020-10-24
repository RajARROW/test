const User = require('../../models/userSchema');
const ErrorHandler = require('../../utils/errorHandler');
const successResponseGenerator = require('../../utils/successResponseGenerator');

const userList = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const userList = await User.find({});
      resolve(successResponseGenerator('Successfull', userList));
    } catch (error) {
      reject(new ErrorHandler(500, `Internal Server error`));
    }
  })
}

module.exports = userList;