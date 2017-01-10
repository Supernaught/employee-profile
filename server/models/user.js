const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
var userSchema = new Schema({
    first_name: String,
    last_name: String,
    age: Number,
    username: { type: String, lowercase: true },
    email: String,
    mobile: String,
    position: String,
    date_started: { type: Date, default: Date.now },
    date_end: { type: Date, default: Date.now },
    birthdate: { type: Date, default: Date.now },
});

// Return model
module.exports = mongoose.model('Users', userSchema);