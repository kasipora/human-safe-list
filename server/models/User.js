'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profileData: {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        bio: { type: String },
    },
    testResults: [{
        testType: { type: String, required: true },
        score: { type: Number, required: true },
        date: { type: Date, default: Date.now }  
    }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);