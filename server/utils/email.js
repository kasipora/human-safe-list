const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // SMTP host
    port: 587, // SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'user@example.com', // your email address
        pass: 'yourpassword' // your email password
    }
});

// Function to send email
const sendCertificateEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'user@example.com', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text // plain text body
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendCertificateEmail };