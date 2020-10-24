const User = require('../../models/userSchema');
const ErrorHandler = require('../../utils/errorHandler');
const successResponseGenerator = require('../../utils/successResponseGenerator');

const createUser = (data) => {
  return new Promise(async (resolve, reject) => {
    console.log(data);
    try {
      const user = await User.updateOne({email: data.email}, data, {upsert: true});
      if(!user['$setOnInsert']) {
        resolve(successResponseGenerator('User created Successfully', data));
      } else {
        resolve(successResponseGenerator('User updated Successfully', data));
      }
    } catch (error) {
      reject(new ErrorHandler(409, `User already exist with email ${data.email}`));
    }
  })
}

module.exports = createUser;