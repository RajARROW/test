const express = require('express');
const router = express.Router();
const createUser = require('./createUser');
const userList = require('./userList');
const userById = require('./useByid');
const deleteUser = require('./deleteUser');

router.route('/create').post(createUser);
router.route('/update').put(createUser);
router.route('/list').get(userList);
router.route('/:id').get(userById);
router.route('/:id').delete(deleteUser);

module.exports = router;