const express = require('express');
const router = express.Router();
const { getAllProjects } = require('../controllers/projectController');

// GET route to retrieve project data
router.get('/', getAllProjects);

module.exports = router;
