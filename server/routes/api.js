const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
	res.send('this is the api');
});

apiRoutes.use('/users', require('./users'));

module.exports = apiRoutes;