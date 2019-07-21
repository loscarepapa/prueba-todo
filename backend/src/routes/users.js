const { Router } = require("express");
const router = Router();
const { getUsers, createUser, deleteUser } = require('../controllers/user.controller');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUsers)
    .delete(deleteUser);

module.exports = router;
