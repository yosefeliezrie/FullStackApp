// Server Side Setup

// http server
const express = require('express');

const bodyParser = require('body-parser');

// Allow requests from client to server and vice versa
const cors = require('cors');

// Error Logger (logs to text file)
const morgan = require('morgan');

// Declare app var
const app = express();

// startup 
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Routes
app.get('/status', (req, res) => {
  res.send({ message: 'Server Running' })
})

app.post('/register', (req, res) => {
  res.send({ message: `hello ${req.body.email}` });
})

// get current server port and use that
app.listen(8084);
