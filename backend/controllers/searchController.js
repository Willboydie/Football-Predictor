const client = require('../db');

const termSearch = async (req, res) => {
    const {term} = req.params;
    
    try {
        // Use parameterized query to prevent SQL injection
        const response = await client.query(
            'SELECT * FROM JanPrediction WHERE LOWER(home_team) LIKE $1 OR LOWER(away_team) LIKE $1 LIMIT 8',
            [`%${term.toLowerCase()}%`]
        );
        
        // Send the rows back to the client
        res.json(response.rows);
    } catch (err) {
        console.error('Search error:', err);
        res.status(500).json({ error: 'Internal server error during search' });
    }
    // test
}

module.exports = { termSearch };