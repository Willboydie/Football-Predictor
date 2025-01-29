const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: process.env.DBPORT,
    password: "Kippen11",
    database: "postgres"
});

module.exports = client;