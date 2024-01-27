const express = require('express');
const router = express.Router()
const { getAllUsers, storeNewUser, getUserById, editUser, deleteUser, login } = require('../controllers/usersControl')

router.route('/').get(getAllUsers).post(storeNewUser)
router.route('/:id').get(getUserById).patch(editUser).delete(deleteUser)
router.route('/login').post(login)
module.exports = router;
