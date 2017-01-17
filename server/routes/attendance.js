const express = require('express');
const attendanceRoutes = express.Router({mergeParams: true});

// models
var User = require('../models/user');
var Attendance = require('../models/attendance');

// get all attendance of user
attendanceRoutes.get('/', (req, res) => {
	User.findOne({username: req.params.username})
	.exec()
	.then((user) => {
		res.json(user.attendance);
	})
	.catch((err) => {
		res.send('Error retriving user with id ' + req.params.userid);
	})
});

// add new attendance for user
attendanceRoutes.post('/', (req, res) => {
	let user =

	User.findOne({username: req.params.username})
	.exec()
	.then((user) => {
		// save attendance
		user.attendance.push(req.body)
		user.save()
		.then((attendance) => {
			res.send(attendance);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
	})
	.catch((err) => {
		res.send('Error retrieving user');
	})
});

// edit attendance for user
attendanceRoutes.put('/:attendanceid', (req, res) => {
	User.findOneAndUpdate(
		{ 
			username: req.params.username,
			"attendance._id": req.params.attendanceid
		},
		{
			$set: {
				"attendance.$.clock_in": req.body.clock_in,
				"attendance.$.clock_out": req.body.clock_out,
			}
		},
		{
			new: true
		}
	)
	.exec()
	.then((user) => {
		res.send(user);
	})
	.catch((err) => {
		res.status(400).json(err);
	})
});

// delete attendance
attendanceRoutes.delete('/:attendanceid', (req, res) => {
	User.findOne({username: req.params.username})
	.exec()
	.then((user) => {
		user.attendance.id(req.params.attendanceid).remove();
		user.save()
		.then((user) => {
			res.send(user);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
	})
	.catch((err) => {
		res.status(400).json(err);
	})
})

module.exports = attendanceRoutes;