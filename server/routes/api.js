const express = require('express');
const mongoose = require('mongoose');

const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
	res.status(403).json({error: 'unathorized'});
});

// api middleware
apiRoutes.use((req, res, next) => {
	console.log('something is happening');
	next();
});

apiRoutes.use('/users', require('./users'));

module.exports = apiRoutes;