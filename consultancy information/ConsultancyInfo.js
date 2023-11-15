// models/ConsultancyInfo.js
const mongoose = require('mongoose');

const consultancyInfoSchema = new mongoose.Schema({
  // Define your schema fields here
  // Example: name: { type: String, required: true },
});

const ConsultancyInfo = mongoose.model('ConsultancyInfo', consultancyInfoSchema);

module.exports = ConsultancyInfo;
