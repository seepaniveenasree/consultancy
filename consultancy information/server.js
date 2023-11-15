// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/console_service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Consultancy Information Model (assuming you have a model for your consultancy information)
const ConsultancyInfo = require('./models/ConsultancyInfo');

// API to get consultancy information
app.get('/api/consultancy-info', async (req, res) => {
  try {
    const info = await ConsultancyInfo.findOne();
    res.json(info);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to update consultancy information
app.put('/api/consultancy-info', async (req, res) => {
  try {
    const updatedInfo = await ConsultancyInfo.findOneAndUpdate({}, req.body, { new: true });
    res.json(updatedInfo);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
