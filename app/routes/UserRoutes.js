var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');
var UserMiddleware = require('../middleware/UserMiddleware');

router  = UserMiddleware;

// Get all Users
router.route('/').get(UserController.getUsers);

// Add User
router.route('/').post(UserController.addUser);

// Get User by Id
router.route('/:user_id').get(UserController.getUser);

// Update User
router.route('/:user_id').put(UserController.updateUser);

// Delete User
router.route('/:user_id').delete(UserController.deleteUser);


module.exports = router;