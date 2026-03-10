const express = require('express');
const router = express.Router();

// Fake data - in real scenario, this would come from a database
const rankings = [
    { id: 1, name: 'Alice', score: 1000 },
    { id: 2, name: 'Bob', score: 800 },
    { id: 3, name: 'Charlie', score: 600 },
];

// Endpoint for global ranking
router.get('/global', (req, res) => {
    // Sort rankings by score in descending order
    const sortedRankings = rankings.sort((a, b) => b.score - a.score);
    res.json(sortedRankings);
});

// Endpoint for country statistics
router.get('/country/:country', (req, res) => {
    const country = req.params.country;
    // In real scenario, filter rankings based on the country
    // Here we're just sending a fake response
    res.json({
        country: country,
        totalPlayers: 100, // Example data
        averageScore: 700, // Example data
    });
});

module.exports = router;