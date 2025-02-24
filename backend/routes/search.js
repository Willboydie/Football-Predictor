const express = require('express');
const router = express.Router();
const { termSearch } = require('../controllers/searchController');

router.use('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*")
    next();
   });

router.get('/term=:term', termSearch);

module.exports = router;