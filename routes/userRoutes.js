const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.post('/', UserController.createUser);  // post mapping to add users.
router.get('/listAllUsers', UserController.listAllUsers);  // Get Mapping to get list of users.
router.get('/getUserById/:id', UserController.getUserById); // Get Mapping to get user by id.
router.delete('/deleteUserById/:id', UserController.deleteUserById); // Delete Mapping to remove user.
router.put('/updateUserById/:id', UserController.updateUserById); // Put Mapping to update user.

module.exports = router;

