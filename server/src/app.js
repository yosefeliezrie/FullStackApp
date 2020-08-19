// Server Side Setup

// http server
const express = require('express');
const bodyParser = require('body-parser');
// Allow requests from client to server and vice versa
const cors = require('cors');
// Error Logger (logs to text file)
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Set Server Side
app.listen(process.env.PORT || 8081);

// Routes
app.get('/status', (req, res) => {
  res.send({ message: `Server Running on port 8081` })
});

app.post('/register', (req, res) => {
  res.send({ message: `hello ${req.body.email}` });
});

