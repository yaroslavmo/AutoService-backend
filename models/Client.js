const mongoose = require('mongoose');
const ClientSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: String,
  carPlate: {type: String, required: true},
  createdAt: {type: Date, default: Date.now }
});

const Client = mongoose.model('Client', ClientSchema, 'clients')

module.exports = Client
module.exports.ClientSchema = ClientSchema