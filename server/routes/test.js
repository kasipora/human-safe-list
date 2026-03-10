'use strict';

const express = require('express');
const router = express.Router();

// Endpoint to submit test answers and calculate scores
router.post('/submit-answers', (req, res) => {
    const answers = req.body.answers;

    // Example score calculation logic
    const correctAnswers = ['A', 'C', 'B', 'D']; // Sample correct answers
    let score = 0;

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    res.status(200).json({ score });
});

module.exports = router;
