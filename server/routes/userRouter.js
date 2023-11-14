// ROUTES FOR USER AUTHENTICATION AND AUTHOLIZATION
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// Define a route for handling login requests
router.post('/', async (req, res) => {
    try {
      const { email, password } = req.body;
      const loginResult = await login(email, password);
  
      console.log('is it a success',loginResult.success)
      if (loginResult.success) {
        res.status(200).json(loginResult.data);
      } else {
        res.status(401).json(loginResult.data);
      }
    } catch (error) {
      console.error('Router error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

module.exports = router;

