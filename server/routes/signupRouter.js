const express = require('express');

const {
    createNewUser
} = require('../controllers/signupController.js')

const router = express.Router();

router.post('/', createNewUser);

module.exports = router;