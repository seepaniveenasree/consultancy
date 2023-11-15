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

// Service Details Model (assuming you have a model for your service details)
const ServiceDetails = require('./models/ServiceDetails');

// API to get all service details
app.get('/api/service-details', async (req, res) => {
  try {
    const details = await ServiceDetails.find();
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to get service details by ID
app.get('/api/service-details/:id', async (req, res) => {
  try {
    const detail = await ServiceDetails.findById(req.params.id);
    res.json(detail);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to create a new service detail
app.post('/api/service-details', async (req, res) => {
  try {
    const newDetail = new ServiceDetails(req.body);
    const savedDetail = await newDetail.save();
    res.json(savedDetail);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to update service details by ID
app.put('/api/service-details/:id', async (req, res) => {
  try {
    const updatedDetail = await ServiceDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedDetail);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to delete service details by ID
app.delete('/api/service-details/:id', async (req, res) => {
  try {
    await ServiceDetails.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service detail deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(Server is running on port ${port});
});