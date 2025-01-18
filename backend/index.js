require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON payloads

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit the process with an error code
    }
};

// Call the function to connect to MongoDB
connectDB();

// Define Message Schema and Model
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email app password
    },
});

// Route to handle contact form submission
app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ alert: 'All fields are required.' });
    }

    try {
        // Save the message to MongoDB
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // Send an email notification
        const mailOptions = {
            from: email, // Visitor's email
            to: process.env.EMAIL_USER, // Your email address
            subject: `New Contact Form Submission from ${name}`,
            text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        // Respond with success
        res.status(201).json({ alert: 'Your message has been sent and stored successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ alert: 'An error occurred. Please try again later.' });
    }
});

// Default route for testing
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});
