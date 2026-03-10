const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/your_database_name'; // Update with your MongoDB URI

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;