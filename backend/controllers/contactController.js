const nodemailer = require('nodemailer');
const Message = require('../models/Message');

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendMessage = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
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
        res.status(201).json({alert: 'Your message has been sent and stored successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ alert: 'An error occurred. Please try again later.' });
    }
};

module.exports = { sendMessage };
