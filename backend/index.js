require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require('./routes/projectRoutes');


// Initialize Express app
const app = express();

// Middleware

app.use(cors({
    origin: 'https://my-portfolio-frontend-omega.vercel.app', // Frontend URL
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Include credentials like cookies if needed
}));

app.use(express.json());  // Parse incoming requests with JSON payloads

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/contact', contactRoutes);
app.use('/projects', projectRoutes);

// Default route for testing
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err); // Log error for debugging
    res.status(500).json({ message: err.message || 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
