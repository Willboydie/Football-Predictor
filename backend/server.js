require('dotenv').config();
const dbClient = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const searchRoutes = require('./routes/search');  // Assuming it exports router directly

// Middleware
app.use(cors());  // Add CORS support
app.use(express.json());

// Routes
app.use('/search', searchRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ mssg: "Oops, 404. You're requesting something either non-existent or impossible." });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ mssg: "Internal Server Error" });
});

// Database connection and server start
dbClient.connect()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to db, listening on port", process.env.PORT);
        });
    })
    .catch(err => {
        console.error("Failed to connect to database:", err);
        process.exit(1);
    });
