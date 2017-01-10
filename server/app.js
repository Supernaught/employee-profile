const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Setup body parser and cors
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(cors());

// Setup mongodb
const db = 'mongodb://localhost/employees';

mongoose.Promise = global.Promise;
mongoose.connect(db);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// include api routes
app.use('/api', require('./routes/api'));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  // res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
