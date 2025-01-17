const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/contactController');

// POST route to handle contact form submission
router.post('/', sendMessage);

module.exports = router;
