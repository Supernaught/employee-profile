const express = require('express');
const userRoutes = express.Router();

// models
var User = require('../models/user');

// List all users
userRoutes.get('/', (req, res) => {
	User.find({})
	.exec()
	.then((users) => {
		res.json(users);
	})
	.catch((err) => {
		res.send('Error displaying list of users.');
	});
});

userRoutes.get('/:id', (req, res) => {
	User.findOne({_id: req.params.id})
	.exec()
	.then((user) => {
		res.json(user);
	})
	.catch((err) => {
		res.send('Error retriving user with id ' + req.params.id);
	})
});

// Create user
userRoutes.post('/', (req, res) => {
	User.create(req.body, (err, user) => {
		res.send(user);
	});
});

// Helper functions for testing only
userRoutes.get('/clear', (req, res) => {
	clearUsers((err, result) => {
		res.send(result);
	});
});

userRoutes.get('/seed', (req, res) => {
	var usersSeed = require('../seeds/users_seed');

	clearUsers((err, result) => {
		User.create(usersSeed, (err, users) => {
			res.send(users);
		});
	})
});

const clearUsers = function(callback){
	User.remove({}, callback);
}

// helper functions end

module.exports = userRoutes;