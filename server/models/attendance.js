const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
var attendanceSchema = new Schema({
    clock_out: { type: Date, default: null },
    clock_in: { type: Date, default: Date.now, required: true },
});

// Return model
module.exports = mongoose.model('Attendance', attendanceSchema);