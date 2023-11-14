// ROUTES FOR USER AUTHENTICATION AND AUTHOLIZATION
const express = require('express');
const { login } = require('../controllers/authController.js');

const router = express.Router();
console.log('routers here');

router.post('/',login);

module.exports = router;
