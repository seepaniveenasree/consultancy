const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/console-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/services', require('./routes/services'));

// Start the server
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});