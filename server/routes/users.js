const express = require('express');
const userRoutes = express.Router();

// models
var User = require('../models/user');

// List all users
userRoutes.get('/', (req, res) => {
	if(req.query['s']) {
		const searchUserRegex = {
				'$regex': req.query['s'],
				'$options': 'i'
		}

		User.find({
			$or: [
				{ 'username': searchUserRegex },
				{ 'first_name': searchUserRegex },
				{ 'last_name': searchUserRegex },
			]
		})
		.exec()
		.then((searchUsersResult) => {
			res.json(searchUsersResult);
		})
	} else{
		User.find({})
		.exec()
		.then((users) => {
			res.json(users);
		})
		.catch((err) => {
			res.send('Error displaying list of users.');
		});
	}

});

// Seed -- helper function only, not for production
userRoutes.get('/seed', (req, res) => {
	var usersSeed = require('../seeds/users_seed');

	clearUsers((err, result) => {
		User.create(usersSeed, (err, users) => {
			res.send(users);
		});
	})
});

// Get single user
userRoutes.get('/:username', (req, res) => {
	User.findOne({username: req.params.username})
	.exec()
	.then((user) => {
		if(user){
			res.json(user);
		} else{
			res.status(400).json({error: 'No user found.'});
		}
	})
	.catch((err) => {
		res.send('Error retriving user with username ' + req.params.username);
	})
});

// Create user
userRoutes.post('/', (req, res) => {
	User.create(req.body)
	.then((user) => {
		res.send(user);
	})
	.catch((err) => {
		res.status(400).json(err);
	});
});

// Edit user
userRoutes.put('/:username', (req, res) => {
	User.findOneAndUpdate(
		{username: req.params.username},
		req.body,
		{ 
			new: true // return the new updated user instead of unaltered user
		}
	)
	.exec()
	.then((newUser) => {
		res.send(newUser);
	})
	.catch((err) => {
		res.status(400).json(err);
	});
});

// Delete user
userRoutes.delete('/:username', (req, res) => {
	User.findOneAndRemove(
		{username: req.params.username},
		{}
	)
	.exec()
	.then((deletedUser) => {
		res.send(deletedUser);
	})
	.catch((err) => {
		res.status(400).json(err);
	});
});

// Clear users -- helper function only, not for production
userRoutes.get('/clear', (req, res) => {
	clearUsers((err, result) => {
		res.send(result);
	});
});

// Attendance
userRoutes.use('/:username/attendance', require('./attendance.js'));

const clearUsers = function(callback){
	User.remove({}, callback);
}

module.exports = userRoutes;