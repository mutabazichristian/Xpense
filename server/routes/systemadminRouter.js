const express = require('express');
const { createSystemAdmin } = require('../controllers/systemadminController');

const router = express.Router();

router.post('/', createSystemAdmin);

module.exports = router;