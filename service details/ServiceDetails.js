// models/ServiceDetails.js
const mongoose = require('mongoose');

const serviceDetailsSchema = new mongoose.Schema({
  // Define your schema fields here
  // Example: name: { type: String, required: true },
});

const ServiceDetails = mongoose.model('ServiceDetails', serviceDetailsSchema);

module.exports = ServiceDetails;