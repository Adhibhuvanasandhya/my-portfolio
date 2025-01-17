const Project = require('../models/Project');

// Fetch all projects
const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to fetch projects.' });
    }
};

module.exports = { getAllProjects };
