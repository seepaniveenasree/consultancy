const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  // Define service schema fields
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;